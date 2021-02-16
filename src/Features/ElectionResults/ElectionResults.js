import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import LottieView from 'lottie-react-native';

const ElectionResults = (props) => {

    const votes = (stateHeading, candidate1, candidateVotesPer1, candidateVotes1, colors1, candidate2, candidateVotesPer2, candidateVotes2, colors2) => {

        return (
            <>
                <View style={styles.desc}>
                    <View style={[styles.winnerIndicator, { backgroundColor: colors1 }]}></View>
                    <Text style={styles.othersProtect1}>{stateHeading}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={[styles.dotIndication, { backgroundColor: colors1 }]}>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.mainPara}>{candidate1}</Text>
                            {colors1 == 'blue' ? <Image source={require('../../assets/images/win1.png')} style={{ width: 18, height: 18, top: 8, left: -5 }} /> : <Image source={require('../../assets/images/win2.png')} style={{ width: 18, height: 18, top: 8, left: -5 }} />}
                        </View>
                        <Text style={styles.mainPara}>{candidateVotesPer1}</Text>
                        <Text style={styles.mainPara}>{candidateVotes1}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ backgroundColor: colors2, width: 14, height: 14, borderRadius: 30, marginTop: 6, left: -2 }}>
                        </View>
                        <Text style={[styles.mainPara, { left: -6 }]}>{candidate2}</Text>
                        <Text style={[styles.mainPara, { left: 5 }]}>{candidateVotesPer2}</Text>
                        <Text style={styles.mainPara}>{candidateVotes2}</Text>
                    </View>
                </View>
            </>
        )
    }

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/vote3.jpg')}>
            <View style={styles.mainView}>
                <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
                <View style={styles.otherHeader}>
                    <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => props.navigation.goBack()}>
                        <BackIcon name="arrow-back" size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.headrtxt}>Election results</Text>
                </View>
                <View style={styles.animationBox}>
                    <LottieView
                        source={require('../../assets/animation/results.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                </View>
                <ScrollView style={{ marginTop: 20 }}>
                    <View style={styles.otherImageContainer}>
                        <Image source={require('../../assets/images/victory.jpg')} style={styles.otherImage} />
                    </View>
                    <Text style={styles.othersProtect}>BATTLEGROUND STATES</Text>
                    {votes('PRESIDENT: ARIZONA', 'Biden', '49.4%', '1,672,143', 'blue', 'Trump', '49.0%', '1,661,686', 'red')}
                    {votes('PRESIDENT: COLORODA', 'Biden', '55.4%', '1,804,352', 'blue', 'Trump', '41.9%', '1,364,607', 'red')}
                    {votes('PRESIDENT: FLORIDA', 'Trump', '47.9%', '5,297,045', 'red', 'Biden', '51.2%', '5,668,731', 'blue')}
                    {votes('PRESIDENT: GEORGIA', 'Biden', '49.5%', '2,473,633', 'blue', 'Trump', '49.2%', '2,461,854', 'red')}
                    {votes('PRESIDENT: LOWA', 'Trump', '44.9%', '759,061', 'red', 'Biden', '53.1%', '897,672', 'blue')}
                    {votes('PRESIDENT: MICHIGAN', 'Biden', '50.6%', '2,804,040', 'blue', 'Trump', '47.8%', '2,649,852', 'red')}
                    {votes('PRESIDENT: MINNESOTA', 'Biden', '52.4%', '1,717,077', 'blue', 'Trump', '45.3%', '1,484,065', 'red')}
                    {votes('PRESIDENT: NEVADA', 'Biden', '50.1%', '703,486', 'blue', 'Trump', '47.7%', '669,890', 'red')}
                    {votes('PRESIDENT: NEW HAMPSHIRE', 'Biden', '52.7%', '424,921', 'blue', 'Trump', '45.4%', '365,654', 'red')}
                    {votes('PRESIDENT: NORTH CAROLINE', 'Trump', '48.6%', '2,684,292', 'red', 'Biden', '49.9%', '2,758,773', 'blue')}
                    {votes('PRESIDENT: OHIO', 'Trump', '45.2%', '2,679,165', 'red', 'Biden', '53.3%', '3,154,834', 'blue')}
                    {votes('PRESIDENT: PENNSYLVANIA', 'Biden', '50.0%', '3,459,923', 'blue', 'Trump', '48.8%', '3,378,263', 'red')}
                    {votes('PRESIDENT: TEXAS', 'Trump ', '46.5%', '5,259,126 ', 'red', 'Biden', '52.1%', '5,890,347', 'blue', 'blue')}
                    {votes('PRESIDENT: VIRGINIA', 'Biden', '54.1%', '2,413,568', 'blue', 'Trump', '44.0%', '1,962,430', 'red')}
                    {votes('PRESIDENT: WISCONSIN', 'Biden', '49.4%', '1,630,673', 'blue', 'Trump', '48.8%', '1,610,065', 'red')}

                    <Text style={styles.othersProtect}>STATE RESULTS</Text>
                    {votes('PRESIDENT: ALABAMA', 'Trump', '62.0%', '1,441,170', 'red', 'Trump', '36.6%', '849,624', 'blue')}
                    {votes('PRESIDENT: ALASKA', 'Trump', '52.8%', '189,951', 'red', 'Trump', '42.8%', '153,778', 'blue')}
                    {votes('PRESIDENT: ARIZONA', 'Biden', '49.4%', '1,672,143', 'blue', 'Biden', '49.0%', '1,661,686', 'red')}
                    {votes('PRESIDENT: ARKANSAS', 'Trump', '62.4%', '760,647', 'red', 'Trump', '34.8%', '423,932', 'blue')}
                    {votes('PRESIDENT: CALIFORNIA', 'Biden', '63.5%', '11,110,250', 'blue', 'Biden', '34.3%', '6,006,429', 'red')}
                    {votes('PRESIDENT: COLORADO', 'Biden', '55.4%', '1,804,352', 'blue', 'Trump', '41.9%', '1,364,607', 'red')}
                    {votes('PRESIDENT: CONNECTICUT', 'Biden', '59.2%', '1,080,680', 'blue', 'Trump', '39.2%', '715,291', 'red')}
                    {votes('PRESIDENT: DELAWARE', 'Biden', '58.7%', '296,268', 'blue', 'Trump', '39.8%', '200,603', 'red')}
                    {votes('PRESIDENT: DISTRICT OF COLUMBIA', 'Biden', '92.1%', '317,323', 'blue', 'Trump', '5.4%', '18,586', 'red')}
                    {votes('PRESIDENT: FLORIDA', 'Trump', '51.2%', '5,668,731', 'red', 'Biden', '47.9%', '5,297,045', 'blue')}
                    {votes('PRESIDENT: GEORGIA', 'Biden', '49.5%', '2,473,663', 'blue', 'Biden', '49.2%', '2,461,854', 'red')}
                    {votes('PRESIDENT: HAWAII', 'Biden', '63.7%', '366,130', 'blue', 'Trump', '34.3%', '196,864', 'red')}
                    {votes('PRESIDENT: IDAHO', 'Trump ', '63.8%', '554,119 ', 'red', 'Biden', '33.1%', '287,021', 'blue', 'blue')}
                    {votes('PRESIDENT: ILLINOIS', 'Biden', '57.5%', '3,471,915', 'blue', 'Trump', '40.6%', '2,446,891', 'red')}
                    {votes('PRESIDENT: INDIANA', 'Trump', '57.0%', '1,729,857', 'red', 'Trump', '41.0%', '1,242,498', 'blue')}
                    {votes('PRESIDENT: LOWA', 'Trump', '53.1%', '897,672', 'red', 'Trump', '44.9%', '759,061', 'blue')}
                    {votes('PRESIDENT: KANSAS', 'Trump', '56.1%', '771,406', 'red', 'Trump', '41.5%', '570,323', 'blue')}
                    {votes('PRESIDENT: KENTUCKY', 'Trump', '62.1%', '1,326,646', 'red', 'Biden', '36.1%', '772,474', 'blue')}
                    {votes('PRESIDENT: LOUISIANA', 'Trump', '58.5%', '1,255,776', 'red', 'Trump', '39.9%', '856,034', 'blue')}
                    {votes('PRESIDENT: MAINE', 'Biden', '53.1%', '435,072', 'blue', 'Biden', '44.0%', '360,737', 'red')}
                    {votes('PRESIDENT: MARYLAND', 'Biden', '65.4%', '1,985,023', 'blue', 'Trump', '32.1%', '976,414', 'red')}
                    {votes('PRESIDENT: MASSACHUSETTS', 'Biden', '65.6%', '2,382,202', 'blue', 'Trump', '32.1%', '1,167,202', 'red')}
                    {votes('PRESIDENT: MICHIGAN', 'Biden', '50.6%', '2,804,040', 'blue', 'Trump', '47.8%', '2,649,852', 'red')}
                    {votes('PRESIDENT: MINNESOTA', 'Biden', '52.4%', '1,717,077', 'blue', 'Trump', '45.3%', '1,484,065', 'red')}
                    {votes('PRESIDENT: MISSISSIPPI', 'Trump', '57.5%', '756,764', 'red', 'Biden', '41.0%', '539,398', 'blue')}
                    {votes('PRESIDENT: MISSOURI', 'Trump', '56.8%', '1,718,736', 'red', 'Biden', '41.4%', '1,253,014', 'blue')}
                    {votes('PRESIDENT: MONTANA', 'Trump', '56.9%', '343,602', 'red', 'Trump', '40.5%', '244,786', 'blue')}
                    {votes('PRESIDENT: NEBRASKA', 'Trump ', '58.2%', '556,846', 'red', 'Biden', '39.2%', '374,583', 'blue', 'blue')}
                    {votes('PRESIDENT: NEVADA', 'Biden', '50.1%', '703,486', 'blue', 'Trump', '47.7%', '669,890', 'red')}
                    {votes('PRESIDENT: NEW HAMPSHIRE', 'Biden', '52.7%', '424,921', 'blue', 'Trump', '45.4%', '365,654', 'red')}{votes('PRESIDENT: ARIZONA', 'Biden', '49.4%', '1,672,143', 'blue', 'Trump', '49.0%', '1,661,686', 'red')}
                    {votes('PRESIDENT: NEW JERSEY', 'Biden', '57.1%', '2,608,335', 'blue', 'Trump', '41.3%', '1,883,274', 'red')}
                    {votes('PRESIDENT: NEW MEXICO', 'Biden', '54.3%', '501,614', 'blue', 'Biden', '43.5%', '401,894', 'red')}
                    {votes('PRESIDENT: NEW YORK', 'Biden', '60.9%', '5,244,006', 'blue', 'Trump', '37.7%', '3,250,230', 'red')}
                    {votes('PRESIDENT: NORTH CAROLINA', 'Trump', '49.9%', '2,758,773', 'red', 'Biden', '48.6%', '2,684,292', 'blue')}
                    {votes('PRESIDENT: NORTH DAKOTA', 'Trump', '65.1%', '235,595', 'red', 'Trump', '31.8%', '114,902', 'blue')}
                    {votes('PRESIDENT: OHIO', 'Trump', '53.3%', '3,154,834', 'red', 'Trump', '45.2%', '2,679,165', 'blue')}
                    {votes('PRESIDENT: OKLAHOMA', 'Trump', '65.4%', '1,020,280', 'red', 'Trump', '32.3%', '503,890', 'blue')}
                    {votes('PRESIDENT: OREGON', 'Biden', '56.5%', '1,340,383', 'blue', 'Trump', '40.4%', '958,448', 'red')}
                    {votes('PRESIDENT: PENNSYLVANIA', 'Biden', '48.8%', '3,459,923', 'blue', 'Biden', '50.0%', '3,378,263', 'red')}
                    {votes('PRESIDENT: RHODE ISLAND', 'Biden', '59.4%', '307,486', 'blue', 'Biden', '38.6%', '199,922', 'red')}
                    {votes('PRESIDENT: SOUTH CAROLINA', 'Trump', '55.1%', '1,385,103', 'red', 'Trump', '43.4%', '1,091,541', 'blue')}
                    {votes('PRESIDENT: SOUTH DAKOTA', 'Trump ', '61.8%', '261,043', 'red', 'Biden', '35.6%', '150,471', 'blue', 'blue')}
                    {votes('PRESIDENT: TENNESSEE', 'Trump', '60.7%', '1,852,475', 'red', 'Trump', '37.4%', '1,143,711', 'blue')}
                    {votes('PRESIDENT: TEXAS', 'Trump', '52.1%', '5,890,347', 'red', 'Trump', '46.5%', '5,29,126', 'blue')}
                    {votes('PRESIDENT: UTAH', 'Trump', '58.1%', '865,140', 'red', 'Biden', '37.6%', '560,282', 'blue')}
                    {votes('PRESIDENT: VERMONT', 'Biden', '66.1%', '242,820', 'blue', 'Trump', '30.7%', '112,704', 'red')}
                    {votes('PRESIDENT: VIRGINIA', 'Biden ', '54.1%', '2,413,568', 'blue', 'Biden', '44.0%', '1,962,430', 'blue', 'red')}
                    {votes('PRESIDENT: WASHINGTON', 'Biden', '58.0%', '2,369,612', 'blue', 'Trump', '38.8%', '1,584,651', 'red')}
                    {votes('PRESIDENT: WEST VIRGINIA', 'Trump', '68.6%', '545,382', 'red', 'Trump', '29.7%', '235,984', 'blue')}
                    {votes('PRESIDENT: WISCONSIN', 'Biden', '49.4%', '1,630,673', 'blue', 'Trump', '48.8%', '1,610,065', 'red')}
                    {votes('PRESIDENT: WTOMING', 'Trump', '69.9%', '193,559', 'red', 'Trump', '26.6%', '73.491', 'blue')}

                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default ElectionResults;
