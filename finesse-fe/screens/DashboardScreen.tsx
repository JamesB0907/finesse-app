import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const Dashboard: React.FC = () => {
    const [symbol, setSymbol] = React.useState('')

    const [getQuote, {data, loading, error}] = useMutation(gql`
    mutation($symbol: String!) {
        quote(symbol: $symbol) {
          change
          changePercent
          companyName
          delayedPrice
          peRatio
          symbol
          previousClose
        }
      }
    `)

    return (
        <View>
            <TextInput value={symbol} onChangeText={setSymbol}/>
            <Button title="Get Quote" onPress={() => getQuote({variables: {symbol}})}/>
            <Text>{JSON.stringify(error || data)}</Text>
        </View>
    )
};

export default Dashboard; 