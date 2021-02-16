import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const VotersIssues = (props) => {

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
                    <Text style={styles.headrtxt}>Voters issues</Text>
                </View>
                <View style={styles.otherMainView}>
                    <Text style={styles.mainHeading}>FIVE BIGGEST VOTERS ISSUES</Text>
                </View>
                <ScrollView style={{ marginTop: 20 }}>
                    <View style={styles.mainPara}>
                        <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>Whether voters in the United States choose Donald Trump or Joe Biden has depended on how they see the response to the coronavirus pandemic, views on abortion and a handful of other key issues.</Text>
                    </View>
                    <Text style={styles.othersProtect}>CORONOVIRUS</Text>
                    <View style={styles.mainPara}>
                        <Text style={styles.mainParatxt}>At the beginning of the year, no one in the US had heard of coronavirus. Almost 11 months later, the topic dominates the political conversation in Washington.</Text>
                        <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n\n'}"It will probably be the biggest issue for the 2020 election." </Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}Laura Merrifield Wilson, an assistant professor of political science at the University of Indianapolis, told DW.{'\n\n'}In the US, more than 230,000 people have died. As of November 2, the case count stood at more than 9.2 million. Unemployment in the US is higher than it has been at any point since the Great Depression. President Donald Trump himself was sick with COVID-19, though that stopped him from holding large campaign rallies for less than two weeks. Wearing a mask, a simple measure health experts are recommending to slow the spread of the virus, has turned into a hot-button political issue. Whether the current president has done a good job in managing the country in the throws of the pandemic depends on who you ask.</Text>
                        <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n\n'}"This election in many ways has become a referendum on that over the last eight, nine months,"</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}Dr. Ashwin Vasan, a doctor and assistant professor at the Columbia University Medical Center in New York, told DW.</Text>
                        <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n\n'}"Whether the current administration has marshalled a response, created a coronavirus plan and executed that plan."</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}Conservatives are saying that without Trump's actions, the situation would be even worse. Liberals are countering that thousands of people wouldn't have had to die if the administration had advocated for stricter restrictions in all states earlier and listened to public health experts.</Text>
                    </View>

                    <Text style={styles.othersProtect}>HEALTH CARE</Text>
                    <View style={styles.mainPara}>
                        <Text>
                            <Text style={styles.mainParatxt}>Another critical issue is health care, which became clear in the confirmation hearing for Amy Coney Barrett, Trump's pick for the Supreme Court seat vacated when Justice Ruth Bader Ginsburg died. The US's highest court will hear a case shortly after the election on whether the Affordable Care Act (ACA, also known as <Text style={{ fontWeight: 'bold' }}>"Obamacare"</Text>) should be repealed something that Trump has been trying to do his entire time in office. Coney Barrett, who has spoken critically about the ACA in the past, wouldn't say whether she was in favor of the repeal.{'\n\n'}Whether people are happy with the health insurance they have or don't have under the ACA and whether they want to keep "Obamacare" is likely to play a big role on election day.{'\n\n'}The coronavirus crisis, too, has made health care a crucial issue to consider for voters.</Text>
                        </Text>
                        <Text>
                            <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n\n'}"We're in the midst of a pandemic, where people's lack of health care coverage is leading to difficulties in getting care, but also to massive medical expenditures and bills once they recover from COVID, let alone all the long-term effects of COVID, which we are still learning much about,"</Text>
                            <Text style={styles.mainParatxt}>  Vasan said.</Text>
                        </Text>
                    </View>

                    <Text style={styles.othersProtect}>ECONOMY</Text>
                    <View style={styles.mainPara}>
                        <Text>
                            <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n\n'}"The economy is imperative for American voters, particularly if it's not doing well,"</Text>
                            <Text style={styles.mainParatxt}>  Wilson said.</Text>
                        </Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}And it's not. Before the outbreak of the pandemic, Trump had a three year record of a robust, healthy economy to look back on. But starting with the lockdowns in March, small businesses had to close all over the country and in mid-April of this year, more than 23 million Americans were out of a job. That's an unemployment rate of 14.7%, up from 3.5% just two months earlier, according to the Bureau of Labor Statistics.</Text>
                        <Text>
                            <Text style={styles.mainParatxt}>{'\n\n'}It's bad news for President Trump, who continually stressed the strong US economy during his first three years in office. With so many Americans struggling to get by or hang on to their homes, he is trying to convince voters that he is the best man to get the economy back on track on the back of a crisis that was unexpected and bound to affect the economy under any presidency.For Democratic candidate Joe Biden, it's easier he blames Trump for mishandling the pandemic economy and promises that with his <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>"Build Back Better"</Text> plan, working- and middle class Americans would fare much better than they would under another four years of Donald Trump.{'\n\n'}In a situation like the current one,</Text>
                        </Text>
                        <Text>
                            <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n'}"it's usually harder for the incumbent because they're the person who's been in power, the person who's had the policies, who's been responsible,"</Text>
                            <Text style={styles.mainParatxt}>  Wilson said.</Text>
                        </Text>
                    </View>

                    <Text style={styles.othersProtect}>RACIAL TENSION</Text>
                    <View style={styles.mainPara}>
                        <Text style={styles.mainParatxt}>The killing of George Floyd by police in Minneapolis in May has led to a resurgence of the Black Lives Matter (BLM) movement across the country. Racial tensions have been a part of US history since the first slaves arrived on the shores of New England, but <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>"this summer,"</Text> Wilson said, was <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>"certainly a historical moment."</Text> Black and white Americans are protesting not just targeted police violence, but also what they perceive as systemic racism in the US, and they're calling for large-scale police reform, with some even calling for a defunding of the police.</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}Critics of the movement, most of them conservatives, have focused on the violence that some cities have seen during the protests. So has President Trump, who called the words <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>"Black Lives Matter"</Text> a <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>"symbol of hate" </Text> and has promised he would restore law and order to the streets.</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}While this is infuriating to BLM supporters, it works for Trump's base, Wilson says.<Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n\n'}"His messaging is trying to mobilize his own voters, voters within the Republican Party and maybe some of those independents who lean to the right,"</Text> the political science professor said. <Text style={[styles.mainParatxt, { fontWeight: 'bold' }]}>{'\n\n'}"The themes, the promises and the policies everything that President Trump is doing on this end is really targeting"</Text> his conservative supporters.</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}Liberals criticize that Trump's attitude is fanning the flames of tension instead of what they believe their president should be doing: bringing the country closer together.</Text>
                    </View>

                    <Text style={styles.othersProtect}>ABORTION</Text>
                    <View style={styles.mainPara}>
                        <Text style={[styles.mainParatxt, {fontWeight: 'bold'}]}>"Abortion is critical in the 2020 presidential race,"</Text><Text style={styles.mainParatxt}>Wilson said.</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}It's the topic that matters most to a big part of Trump's base: White evangelicals. While this group only makes up around 15% of the US population, they go to the polls in large numbers and accounted for more than a quarter of all voters in 2016, according to National Election Pool exit polls. Many of these conservative Protestant Christians hold values that are diametrically opposed to Trump's multiple marriages and divorces, for example.</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}But as an Instagram post by the anti-abortion group <Text style={[styles.mainParatxt, {fontWeight: 'bold'}]}>"Students for Life"</Text> put it: <Text style={[styles.mainParatxt, {fontWeight: 'bold'}]}>"Hate Trump? We hate abortion more."</Text> Trump is considered the definitive anti-abortion choice: He was the first sitting president to attend the anti-abortion <Text style={[styles.mainParatxt, {fontWeight: 'bold'}]}>"March for Life."</Text></Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}For Americans on the opposite end of the spectrum, that's another reason not to vote for him. Abortion <Text style={[styles.mainParatxt, {fontWeight: 'bold'}]}>"is also an important issue for a group of liberal voters," </Text> Wilson said. <Text style={[styles.mainParatxt, {fontWeight: 'bold'}]}>"There is a large pro-choice movement within the Democratic party."</Text> These voters see Trump's Supreme Court pick Coney Barrett as a danger to Roe v. Wade, the decision that has guaranteed women access to safe and legal abortions for the last 47 years.</Text>
                        <Text style={styles.mainParatxt}>{'\n\n'}To Democrats, a vote for Biden is also a vote for the liberal and most likely pro-choice Supreme Court justices he might get to nominate during his term.</Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default VotersIssues;
