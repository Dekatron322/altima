import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spacer } from "@/components/CustomUIComponets/Spacer";
import CustomHeader from "@/components/CustomUIComponets/CustomHeader";
import { styles } from "@/styles/general/general";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location"; // Import expo-location
import { Audio } from "expo-av";

type Transaction = {
  id: string;
  customerAccountNo: string;
  amount: string;
  pub_date: string;
};

type User = {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  agentId: string;
  collectionLimit: string;
};

export default function PrepaidScreen() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const payMethodBottomSheetRef = useRef<BottomSheetMethods>(null);
  const payMethodSnapPoints = useMemo(() => ["75%", "100%"], []);
  const [code, setCode] = useState(new Array(4).fill(""));
  const [selectedPaymentType, setSelectedPaymentType] = useState("CARD");
  const payBottomSheetRef = useRef<BottomSheetMethods>(null);
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const pinBottomSheetRef = useRef<BottomSheetMethods>(null);
  const snapPoints = useMemo(() => ["45%", "100%"], []);
  const pinSnapPoints = useMemo(() => ["30%", "100%"], []);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpiner] = useState(false);
  const [telephoneNumber, setTelephoneNumber] = useState(""); // New state for telephone number
  const [notes, setNotes] = useState(""); // New state for notes

  const handleSelectPaymentType = (type: string) => {
    setSelectedPaymentType(type);

    // Ensure the selected payment type keeps the modal open and shows relevant content
    if (type === "CARD") {
      // No need to close the bottom sheet, just expand it to show the card details
      payMethodBottomSheetRef.current?.expand();
    } else if (type === "CASH" || type === "TRANSFER") {
      // Expand the bottom sheet to show the form for CASH or TRANSFER payment
      payMethodBottomSheetRef.current?.expand();
    }
  };

  const payments = [
    {
      id: 1,
      item: "Account Name",
      value: "Kaduna Electricity",
    },
    {
      id: 2,
      item: "Account Number",
      value: "0104674762",
    },
    {
      id: 3,
      item: "Bank",
      value: "Union Bank",
    },
  ];
  const PRICE_PER_UNIT = 600; // Define price per unit
  const [amount, setAmount] = useState(""); // Track entered amount
  const [units, setUnits] = useState(0); // Track calculated units
  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
  const { meterNumber, customerName, customerAddress, customerState } =
    useLocalSearchParams();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const handleInput = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }

    if (text === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleOpenPaymentBottomSheet = () => {
    bottomSheetRef.current?.close();
    payMethodBottomSheetRef.current?.expand();
  };

  const handleOpenPinBottomSheet = () => {
    payMethodBottomSheetRef.current?.close();
    pinBottomSheetRef.current?.expand();
  };

  const handleSheetChanges = useCallback((index: number) => {
    setIsBottomSheetOpen(index >= 0);
  }, []);

  const handleAmountChange = (text: string) => {
    const enteredAmount = parseFloat(text) || 0;
    setAmount(text);
    setUnits(enteredAmount / PRICE_PER_UNIT);
  };

  const fetchUserData = async () => {
    try {
      // Retrieve user ID from AsyncStorage
      const userId = await AsyncStorage.getItem("userId");

      if (userId) {
        const response = await fetch(
          `https://kad-api.fyber.site/custom-user/get-user-detail/${userId}/`
        );
        const data = await response.json();

        // Set user information
        const {
          id,
          first_name,
          last_name,
          username,
          agentId,
          collectionLimit,
        } = data;
        setUser({
          id,
          first_name,
          last_name,
          username,
          agentId,
          collectionLimit,
        });

        // Check if transactions exist
        if (data.transactions) {
          setTransactions(data.transactions);
        } else {
          setTransactions([]);
        }
      } else {
        console.error("No user ID found.");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to fetch user location
  const getUserLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Permission to access location was denied."
        );
        return null;
      }

      let location = await Location.getCurrentPositionAsync({});
      return {
        latitude: location.coords.latitude.toString(),
        longitude: location.coords.longitude.toString(),
      };
    } catch (error) {
      console.error("Failed to get location:", error);
      Alert.alert("Error", "Unable to fetch location.");
      return null;
    }
  };

  const handlePayment = async () => {
    // Validate inputs
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount.");
      return;
    }

    if (selectedPaymentType === "CARD" && code.some((c) => c === "")) {
      Alert.alert("Invalid PIN", "Please enter your card PIN.");
      return;
    }

    if (selectedPaymentType === "TRANSFER" && !telephoneNumber) {
      Alert.alert(
        "Invalid Telephone Number",
        "Please enter your telephone number."
      );
      return;
    }

    setButtonSpiner(true);

    try {
      const location = await getUserLocation();
      if (!location) {
        setButtonSpiner(false);
        return;
      }

      const payload = {
        agentId: user?.id || "",
        meterNumber: meterNumber || "",
        amount: amount,
        locationOfPayment: customerAddress || "Unknown Location",
        notes: notes || "Payment via PrepaidScreen",
        telephoneNumber: telephoneNumber || "0000000000",
        laitude: location.latitude,
        longitude: location.longitude,
        payment_type: selectedPaymentType.toLowerCase(),
      };

      const response = await fetch(
        "https://kad-api.fyber.site/payment/cashpay-prepaid/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Payment successful response:", data);

        // Play success sound
        const { sound } = await Audio.Sound.createAsync(
          require("@/assets/sounds/success.mp3") // Replace with the actual path to your sound file
        );
        await sound.playAsync();

        // Navigate to waterDetail screen with payment details
        router.push({
          pathname: "/(routes)/waterDetail",
          params: {
            agentId: data.agentId,
            amount: data.amount,
            token: data.token,
            customerName: data.customerName,
            customerAddress: data.customerAddress,
            meterNumber: data.meterNumber,
            totalUnitVended: data.totalUnitVended,
          },
        });

        Alert.alert("Success", "Payment was successful.");
      } else {
        const errorData = await response.json();
        console.error("Payment failed response:", errorData);
        Alert.alert(
          "Payment Failed",
          errorData.message || "An error occurred."
        );
      }
    } catch (error) {
      console.error("Payment Error:", error);
      Alert.alert("Payment Error", "Something went wrong. Please try again.");
    } finally {
      setButtonSpiner(false);
    }
  };

  const handleOnlinePayment = async () => {
    // Validate inputs
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount.");
      return;
    }

    if (selectedPaymentType === "CARD" && code.some((c) => c === "")) {
      Alert.alert("Invalid PIN", "Please enter your card PIN.");
      return;
    }

    if (selectedPaymentType === "TRANSFER" && !telephoneNumber) {
      Alert.alert(
        "Invalid Telephone Number",
        "Please enter your telephone number."
      );
      return;
    }

    setButtonSpiner(true);

    try {
      const location = await getUserLocation();
      if (!location) {
        setButtonSpiner(false);
        return;
      }

      const payload = {
        agentId: user?.id || "",
        meterNumber: meterNumber || "",
        amount: amount,
        locationOfPayment: customerAddress || "Unknown Location",
        notes: notes || "Payment via PrepaidScreen",
        telephoneNumber: telephoneNumber || "0000000000",
        laitude: location.latitude,
        longitude: location.longitude,
        payment_type: selectedPaymentType.toLowerCase(),
      };

      const response = await fetch(
        "https://kad-api.fyber.site/payment/init/online-pay-prepaid/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Payment successful response:", data);

        // Play success sound
        // const { sound } = await Audio.Sound.createAsync(
        //   require("@/assets/sounds/success.mp3") // Replace with the actual path to your sound file
        // );
        // await sound.playAsync();

        // Navigate to waterDetail screen with payment details
        router.push({
          pathname: "/(routes)/onlineDetail",
          params: {
            agentId: data.agentId,
            amount: data.data.amount,
            token: data.data.token,
            customerName: data.customerName,
            meterNumber: data.meterNumber,
            totalUnitVended: data.data.totalUnitVended,
            checkoutUrl: data.data.checkoutUrl,
            reference: data.data.reference,
          },
        });

        Alert.alert("Success", "Payment was successful.");
      } else {
        const errorData = await response.json();
        console.error("Payment failed response:", errorData);
        Alert.alert(
          "Payment Failed",
          errorData.message || "An error occurred."
        );
      }
    } catch (error) {
      console.error("Payment Error:", error);
      Alert.alert("Payment Error", "Something went wrong. Please try again.");
    } finally {
      setButtonSpiner(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Payment" showHistory={true} />
      <View style={styles.border}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer size={20} />

        <View style={{ paddingHorizontal: 20 }}>
          <View style={[styles.headerArea, { borderRadius: 8 }]}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={require("@/assets/images/Group.png")} />
              <View>
                <Text style={styles.johnDoe}>{customerName}</Text>
                <Spacer size={4} />
                <Text style={styles.posId}>Meter Number: {meterNumber}</Text>
              </View>
            </View>
            <Image
              source={require("@/assets/images/AccountConfirm.png")}
              style={{ height: 24, width: 24 }}
            />
          </View>

          <Spacer size={16} />

          <View style={[styles.cardContainer]}>
            <Text style={styles.info}>Amount</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontFamily: "LufgaMedium", fontSize: 24 }}>₦</Text>
              <TextInput
                keyboardType="number-pad"
                maxLength={100}
                placeholder="2500"
                placeholderTextColor="#212121"
                style={styles.enterAmount}
                value={amount}
                onChangeText={handleAmountChange} // Use the handler to update amount and units
              />
            </View>
            <View style={[styles.newBorder, { borderColor: "#008000" }]}></View>
            <Spacer size={16} />
            <Text style={styles.info}>Unit</Text>
            <Spacer size={8} />
            <Text style={{ fontFamily: "LufgaMedium", fontSize: 24 }}>
              {units.toFixed(2)}{" "}
              {/* Show the calculated units, rounded to 2 decimals */}
            </Text>
            <Spacer size={8} />
            <View style={styles.newBorder}></View>
            <Spacer size={8} />
            <Text style={styles.calculator}>1 unit=₦600</Text>
          </View>
          <Spacer size={20} />
          <View style={[styles.cardContainer, { alignItems: "center" }]}>
            <TouchableOpacity
              style={[styles.btnContainer, { width: "100%", height: 48 }]}
              onPress={handleOpenBottomSheet}
            >
              <Text style={styles.btnContent}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {isBottomSheetOpen && <View style={styles.overlay} />}

      {/* Payment Details Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: "#F6F6F6" }}
      >
        <View style={styles.topContainer}>
          <Text style={styles.bottomSheetTitle}>Payment</Text>
          <Feather
            name="x"
            size={18}
            onPress={() => bottomSheetRef.current?.close()}
          />
        </View>

        <Spacer size={16} />

        {/* Dynamically show the entered amount */}
        <Text style={[styles.amount, { textAlign: "center" }]}>
          ₦{amount || "0.00"} = {units.toFixed(2)} units
        </Text>

        <Spacer size={8} />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.cardContainer}>
            <View style={styles.rowContent}>
              <Text style={styles.textSubTitle}>Amount</Text>
              <Text style={styles.moreSubTitle}>₦{amount || "0.00"}</Text>
            </View>

            <Spacer size={10} />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textSubTitle}>Agent Name</Text>
              <Text style={styles.moreSubTitle}>
                {user ? `ID: ${user.agentId}` : "ID: 23456712"}
              </Text>
            </View>

            <Spacer size={10} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textSubTitle}>Customer</Text>
              <Text style={styles.moreSubTitle}>{customerName}</Text>
            </View>

            <Spacer size={10} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textSubTitle}>Meter Number</Text>
              <Text style={styles.moreSubTitle}>{meterNumber}</Text>
            </View>
            <Spacer size={10} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textSubTitle}>Customer Address</Text>
              <Text style={styles.moreSubTitle}>
                {customerAddress}, {customerState}
              </Text>
            </View>
          </View>

          <Spacer size={20} />

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={handleOpenPaymentBottomSheet}
          >
            <Text style={styles.btnContent}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      {/* Payment Method Bottom Sheet */}
      <BottomSheet
        ref={payMethodBottomSheetRef}
        index={-1}
        snapPoints={payMethodSnapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: "#F6F6F6" }}
      >
        <View style={styles.topContainer}>
          <Text style={styles.bottomSheetTitle}>Payment Method</Text>
          <Feather
            name="x"
            size={18}
            onPress={() => payMethodBottomSheetRef.current?.close()}
          />
        </View>

        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 6,
            }}
          >
            <View style={{ paddingHorizontal: 20 }}>
              <View style={styles.bottomSheetSelect2}>
                <TouchableOpacity
                  style={styles.bottomSheetContent}
                  onPress={() => handleSelectPaymentType("CARD")}
                >
                  <View style={styles.bottomSheetInner}>
                    <Image
                      source={require("@/assets/images/Group2.png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontSize: 12, fontFamily: "LufgaMedium" }}>
                      CARD
                    </Text>
                  </View>
                  {selectedPaymentType === "CARD" && (
                    <Image
                      source={require("@/assets/images/CheckCircle.png")}
                    />
                  )}
                </TouchableOpacity>
                <Spacer size={3} />
                <View style={styles.newBorder}></View>
                <Spacer size={3} />
                <TouchableOpacity
                  style={styles.bottomSheetContent}
                  onPress={() => handleSelectPaymentType("CASH")}
                >
                  <View style={styles.bottomSheetInner}>
                    <Image
                      source={require("@/assets/images/Group2.png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontSize: 12, fontFamily: "LufgaMedium" }}>
                      CASH
                    </Text>
                  </View>
                  {selectedPaymentType === "CASH" && (
                    <Image
                      source={require("@/assets/images/CheckCircle.png")}
                    />
                  )}
                </TouchableOpacity>
                <Spacer size={3} />
                <View style={styles.newBorder}></View>
                <Spacer size={3} />
                <TouchableOpacity
                  style={styles.bottomSheetContent}
                  onPress={() => handleSelectPaymentType("TRANSFER")}
                >
                  <View style={styles.bottomSheetInner}>
                    <Image
                      source={require("@/assets/images/Group2.png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontSize: 12, fontFamily: "LufgaMedium" }}>
                      PAY ONLINE
                    </Text>
                  </View>
                  {selectedPaymentType === "TRANSFER" && (
                    <Image
                      source={require("@/assets/images/CheckCircle.png")}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <Spacer size={4} />

              {/* Additional Input Fields Based on Payment Type */}
              {selectedPaymentType === "CARD" && (
                <>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#ffffff",
                      padding: 10,
                      borderRadius: 16,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "LufgaMedium",
                        fontSize: 12,
                        color: "#00000033",
                      }}
                    >
                      Input Card
                    </Text>
                    <Spacer size={5} />
                    <Image
                      source={require("@/assets/images/Card.png")}
                      style={{ width: 80, height: 80, resizeMode: "contain" }}
                    />
                    <Spacer size={5} />
                    <Image
                      source={require("@/assets/images/ArrowFatLinesUp.png")}
                    />
                  </View>
                  <Spacer size={8} />
                  <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={handleOpenPinBottomSheet}
                  >
                    <Text style={styles.btnContent}>Verify</Text>
                  </TouchableOpacity>
                </>
              )}

              {selectedPaymentType === "CASH" && (
                <>
                  <Spacer size={10} />
                  <Text>Telephone Number</Text>
                  <TextInput
                    keyboardType="phone-pad"
                    maxLength={15}
                    placeholder="Enter Number"
                    placeholderTextColor="#212121"
                    style={styles.textInputStylePhone}
                    value={telephoneNumber}
                    onChangeText={setTelephoneNumber}
                  />
                  <Spacer size={10} />
                  <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={handlePayment}
                  >
                    {buttonSpinner ? (
                      <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                      <Text style={styles.btnContent}>Pay</Text>
                    )}
                  </TouchableOpacity>
                </>
              )}

              {selectedPaymentType === "TRANSFER" && (
                <>
                  <Text
                    style={[
                      styles.headerText,
                      { fontFamily: "LufgaMedium", fontSize: 14 },
                    ]}
                  >
                    Phone Number
                  </Text>
                  <TextInput
                    keyboardType="phone-pad"
                    maxLength={15}
                    placeholder="Enter your telephones number"
                    placeholderTextColor="#212121"
                    style={styles.textInputStylePhone}
                    value={telephoneNumber}
                    onChangeText={setTelephoneNumber}
                  />
                  <Spacer size={10} />

                  <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={handleOnlinePayment}
                  >
                    {buttonSpinner ? (
                      <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                      <Text style={styles.btnContent}>Verify Payment</Text>
                    )}
                  </TouchableOpacity>
                </>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </BottomSheet>
    </SafeAreaView>
  );
}
