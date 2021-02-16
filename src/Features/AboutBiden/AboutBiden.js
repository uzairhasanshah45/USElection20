import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import LottieView from 'lottie-react-native';

const AboutBiden = (props) => {

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/us2.jpg')}>
            <View style={styles.mainView}>
                <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
                <View style={styles.otherHeader}>
                    <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => props.navigation.goBack()}>
                        <BackIcon name="arrow-back" size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.headrtxt}>About Biden</Text>
                </View>
                <View style={styles.animationBox}>
                    <LottieView
                        source={require('../../assets/animation/president.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                </View>


                <ScrollView style={{ marginTop: 20 }}>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>Joe Biden is the president of the United States. He also served as Barack Obama's vice president from 2008-2016.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Former Vice President Joe Biden is set to make history on Wednesday as the 46th president of the United States, taking over from Donald Trump after a tumultuous four years.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden comes into office during an uncertain time for the country on many fronts -- a raging coronavirus pandemic, months of protests over racial injustice and a bitterly fought election that ended in the siege of the U.S. Capitol just days ago. Biden will be the first president in more than a century not to be greeted by the outgoing president -- Donald Trump is set to depart to his residence in Florida earlier in the day.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden's journey from being a son of Scranton, Pennsylvania to the White House has been a long one -- serving as vice president to the first Black president for eight years and then before that, a senator from Delaware for decades. He has faced personal tragedy on a number of occasions but that grief has shaped him.</Text>

                    </View>
                    <Text style={styles.othersProtect}>WHO IS JOE BIDEN</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}> <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>Name:</Text>Joseph Robinette Biden Jr.</Text>
                        <Text style={styles.mainPara}> <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>Party:</Text>Democrat</Text>
                        <Text style={styles.mainPara}> <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>Date of birth:</Text>Nov. 20, 1942</Text>
                        <Text style={styles.mainPara}> <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>Age:</Text>78</Text>
                        <Text style={styles.mainPara}> <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>Hometown:</Text>Scranton, Pennsylvania</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Joe Biden briefly worked as an attorney before turning to politics. He became the fifth-youngest U.S. senator in history as well as Delaware's longest-serving senator. His 2008 presidential campaign never gained momentum, but Democratic nominee Barack Obama selected him as his running mate, and Biden went on to serve two terms as the 47th vice president of the United States. In 2017, at the close of his administration, Obama presented Biden with the Presidential Medal of Freedom. Two years later Biden launched his campaign for U.S. president and was elected as the 46th president of the United States.</Text>
                    </View>
                    <Text style={styles.othersProtect}>FAMILY</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Married to Jill Biden, father to Hunter, Ashley and the late Joseph Robinette 'Beau' III and Naomi. Biden's first wife, Neilia, died in a car accident with their baby daughter Naomi in 1972. Beau Biden died in May 2015 of brain cancer.</Text>
                    </View>
                    <View style={styles.otherImageContainer}>
                        <Image source={require('../../assets/images/bidenfamily.jpg')} style={styles.otherImage} />
                    </View>


                    <Text style={styles.othersProtect}>EDUCATION</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>He graduated from the University of Delaware and Syracuse Law School.</Text>
                    </View>


                    <Text style={styles.othersProtect}>WHAT HE USED TO DO</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>He served as vice president from 2009 to 2017. From 1973 to 2009, Biden served in the U.S. Senate and was on two key committees as both ranking member and chairman: the Senate Foreign Relations Committee and the Senate Judiciary Committee. He also served on the New Castle County Council after finishing law school. Since leaving the White House, Biden and his wife launched the Biden Cancer Initiative to invest in efforts for cancer prevention, detection, diagnosis, research and care.</Text>
                    </View>


                    <Text style={styles.othersProtect}>KEY LIFE/CAREER MOMENTS</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>After publicly supporting same-sex marriage ahead of his boss, Biden reportedly apologized to Obama in 2012. But Obama said in an interview with ABC's “Good Morning America” co-anchor Robin Roberts, "I think Joe is an extremely generous loving person. And I think he was responding honestly in terms of how he felt."</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden supported protecting women from violence -- even teaming up with performer Lady Gaga in 2017 to support the "It's on Us" campaign against sexual assault.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Perhaps one of the most poignant moments of his vice presidency came when Obama surprised Biden with a Presidential Medal of Freedom.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Throughout the 2018 midterms, Biden was a powerful surrogate for Democrats, making campaign swings through the Midwest and across the country to boost for Democratic candidates.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}The University of Pennsylvania announced the Penn Biden Center for Diplomacy and Global Engagement to honor his "unsurpassed understanding of diplomacy and far-ranging grasp of world issues" in 2017. That same year, the University of Delaware announced a partnership with Biden to launch the Biden Domestic Policy Institute.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}During Biden's Senate career, he oversaw the confirmation of Supreme Court Justice Clarence Thomas in his role as the head of the Judiciary Committee. He was criticized for his handling of the hearing after Anita Hill testified before the committee, and his failure to defend Hill as she faced questioning from an all-white, male committee, as Republican members sought to discredit her testimony.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden voted against Thomas, but the Senate nonetheless confirmed the then-nominee. Biden has publicly apologized to Hill, and said in March at the Biden Courage Awards he regrets he <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>"couldn't come up with a way to get (Hill) the kind of hearing she deserved."</Text></Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden has also led the charge on the sweeping, bipartisan 1994 crime bill. A bill Biden referred to as the <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>"Biden Crime Bill" </Text>during his 2008 presidential campaign  which critics say had a disproportionate impact on minority communities, particularly due to mass incarceration.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden undertook three presidential runs during his nearly 50 years in public life, with the first, in 1987, ending before any primary voting took place due to a plagiarism scandal. In that case, Biden quoted British Labor party leader Neil Kinnock without attribution. Biden also faced questions of plagiarism in law school after a paper he wrote did not include proper citation for some of the text.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}He admitted to that in 1987, called it a <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>"mistake"</Text> and said that there wasn't <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>"malevolent"</Text>intent, according to reports at the time.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}His second presidential run during the 2008 primary ended after the Iowa Caucuses, where Biden received less than 1% of the vote.</Text>
                    </View>


                    <Text style={styles.othersProtect}>WHERE HE STANDS ON SOME OF THE ISSUES:</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Biden has expanded his plan for higher education and proposes offering free college tuition for public universities, historically black colleges and universities, and minority-serving institutions to families making less than $125,000, along with his previous pledge to make community college tuition free.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden's plan for health care would attempt to make the Affordable Care Act easier to navigate with more choices. His plan would expand upon the Affordable Care Act passed under the Obama-Biden administration and provide a public option for patients to buy into, rather than Sen. Bernie Sanders' "Medicare for All" system that several of Biden's rivals advocated for during the primaries.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden has also put a large focus on addressing climate change, calling it one of the four crises facing the country today. In the summer of 2020, he unveiled a sweeping new proposal that called for the United States to achieve a carbon-free power sector by 2035 and a $2 trillion investment over his first four years in office in green energy and infrastructure to combat the threat of climate change.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}Biden has also put forth several plans to address the coronavirus pandemic, pledging to follow the science and heed the advice of experts. Biden plans to mandate masks on federal property for the first 100 days of his administration and faces the deep challenge of vaccinating the U.S. population.</Text>
                        <Text style={styles.mainPara}>{'\n\n'}In the wake of protests across the country over racial inequality last summer, Biden has not joined the calls to defund police departments, but advocates for providing an additional $300 million in funding for community-based policing, as well as pairing police with mental health experts to be able to better address community needs, while also advocating for a national use-of-force standard.</Text>
                    </View>
                    <View style={styles.otherImageContainer}>
                        <Image source={require('../../assets/images/stand.jpg')} style={styles.otherImage} />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default AboutBiden;
