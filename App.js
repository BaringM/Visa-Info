import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


// -----------------------Main app bringing the two pages together ---------------------------

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          labelStyle: {
            fontSize: 16,
            marginLeft: 8,
          },
          tabBarLabelPosition: 'beside-icon', // Add this line
        }}
      >
        <Tab.Screen 
          name="Home Page"
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Visa Info" 
          component={VisaInfo}    
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
            tabBarLabel: 'Visa Info',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// -----------------------Tab 1 (Inspiration of working abroad) ---------------------------

const Home = () => {
  return (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.app}>
      <View style={styles.firstcontainer}>
        <Text style={styles.descriptionhome}>Moving abroad can be one of the most exhilarating experiences of a lifetime. The thought of exploring new cultures, meeting new people, and discovering unfamiliar landscapes is enough to make anyone's heart race with excitement. It's a chance to challenge yourself in ways you never thought possible and to expand your worldview.</Text>
        <Text style={styles.descriptionhome}>The idea of starting fresh in a foreign land, learning a new language, and immersing yourself in a new way of life is not only adventurous but also incredibly rewarding. So, pack your bags, take a deep breath, and get ready to embark on an adventure of a lifetime by moving abroad.</Text>
        <Text style={styles.descriptionhome}>To be completely honest this is just a starting of the app and if you want more features and more countries let me know! I was looking at adding a feature that builds a community for helping people move abroad and really live and see the world we are on. Because isn't it a bueatiful place. </Text>      
        <Text style={styles.descriptionhome}>Let me know at montybaring@gmail.com</Text>
     </View>
    </View>
  </ScrollView>
  );
};

// ---------------------Tab 2 (Visa information)-----------

const VisaInfo = () => {
  const [selectedOption1, setSelectedOption1] = useState('option1');
  const [selectedOption2, setSelectedOption2] = useState('option1');

  const handleOption1Change = (value) => {
    setSelectedOption1(value);
    console.log("Selected option 1: ", value);
  };

  const handleOption2Change = (value) => {
    setSelectedOption2(value);
    console.log("Selected option 2: ", value);
  };

  let paragraph = '';
  if (selectedOption1 === 'option1' && selectedOption2 === 'option1') {
    paragraph = 'You have selected the UK twice.';
  } else if (selectedOption1 === 'option2' && selectedOption2 === 'option2') {
    paragraph = 'You have selected France twice.';
  } else if (selectedOption1 === 'option3' && selectedOption2 === 'option3') {
    paragraph = 'You have selected Germany twice.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option2') {
    paragraph = 'As a UK citizen, you have the right to live and work in France without the need for a work permit.\n\nIf you plan to stay in France for more than three months, you will need to register with the French authorities and obtain a residency permit.\n\nTo register for a residency permit, you will need to provide the following documents:\n• A valid passport\n• Proof of your accommodation in France\n• Proof of your financial resources (such as bank statements or a job contract)\n• Proof of health insurance\n• Two passport-style photographs\n\nYou will need to submit your application to the local prefecture or sub-prefecture in the area where you plan to live. You may be required to attend an interview as part of the application process, and you may need to pay a fee to have your application reviewed.\n\nIt\'s also a good idea to familiarize yourself with the French tax system before you begin working in the country. You will need to pay income tax on any money you earn in France, and you may be eligible for certain tax credits and deductions. You can find more information about the French tax system on the French tax authority website (Direction générale des finances publiques).\n\nIt\'s important to note that the UK\'s departure from the European Union (EU) due to Brexit may affect your rights and privileges as a UK citizen living and working in France, such as your access to public benefits and services. It is a good idea to stay up to date on any changes to the legal framework governing the rights of UK citizens in France and to consult with an immigration lawyer if you have any questions or concerns.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option3') {
    paragraph = 'As a UK citizen, you have the right to live and work in Germany without the need for a work permit. However, if you plan to stay in Germany for more than three months, you will need to register with the German authorities and obtain a registration certificate as a "person with the right of free movement."\n\nTo register as a person with the right of free movement, you will need to provide the following documents:\n• A valid passport or national identity card\n• Evidence of your employment or self-employment status in Germany\n• Evidence of your right to access public funds, if applicable\n• Evidence of your right to receive medical treatment in Germany\n\n You can apply for a registration certificate in person at a local registration office (Einwohnermeldeamt). You may need to pay a fee to have your application reviewed.\n\nIt\'s also a good idea to familiarize yourself with the German tax system before you begin working in the country. You will need to pay income tax on any money you earn in Germany, and you may be eligible for certain tax credits and deductions. You can find more information about the German tax system on the Federal Ministry of Finance website.';
  } else if (selectedOption1 === 'option2' && selectedOption2 === 'option1') {
    paragraph = 'You have selected France and the UK.';
  } else if (selectedOption1 === 'option2' && selectedOption2 === 'option3') {
    paragraph = 'You have selected France and Germany.';
  } else if (selectedOption1 === 'option3' && selectedOption2 === 'option1') {
    paragraph = 'You have selected Germany and the UK.';
  } else if (selectedOption1 === 'option3' && selectedOption2 === 'option2') {
    paragraph = 'You have selected Germany and France.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option4') {
    paragraph = 'As a UK citizen, you can visit Spain for up to 90 days without a visa. However, if you plan to stay in Spain for more than 90 days, you will need to register with the Spanish authorities and obtain a residency permit.\n\nTo register for a residency permit, you will need to provide the following documents:\n\n• A valid passport\n• Proof of your accommodation in Spain\n• Proof of your financial resources (such as bank statements or a job contract)\n• Proof of health insurance\n• A criminal record certificate from your country of origin\n\nYou will need to submit your application to the local police station in the area where you plan to live. You may be required to attend an interview as part of the application process, and you may need to pay a fee to have your application reviewed.\n\nIt\'s also a good idea to familiarize yourself with the Spanish tax system before you begin working in the country. You will need to pay income tax on any money you earn in Spain, and you may be eligible for certain tax credits and deductions. You can find more information about the Spanish tax system on the Spanish tax authority website (Agencia Tributaria).\n\nIt\'s important to note that the UK\'s departure from the European Union (EU) due to Brexit may affect your rights and privileges as a UK citizen living and working in Spain, such as your access to public benefits and services. It is a good idea to stay up to date on any changes to the legal framework governing the rights of UK citizens in Spain and to consult with an immigration lawyer if you have any questions or concerns.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option5') {
    paragraph = 'As a UK citizen, you have the right to work in Canada under the terms of the Canada-UK Youth Mobility Agreement. This agreement allows citizens of the UK who are aged 18-35 to live and work in Canada for up to two years.\n\nTo work in Canada under this agreement, you will need to apply for a work permit. You can do this online through the Immigration, Refugees, and Citizenship Canada (IRCC) website.\n\nTo apply for a work permit, you will need to provide the following documents:\n\n• A valid passport or travel document\n• Two passport-style photographs\n• A completed application form\n• A copy of your birth certificate\n• A police certificate of good conduct\n• Proof of sufficient funds to support yourself during your stay in Canada\n• Proof of medical insurance\n• A letter of employment or job offer from a Canadian employer\n\nOnce you have all of the necessary documents, you can submit your application online through the IRCC website. You will need to pay a processing fee to have your application reviewed.\n\nIt\'s also a good idea to familiarize yourself with the Canadian tax system before you begin working in the country. You will need to pay income tax on any money you earn in Canada, and you may be eligible for certain tax credits and deductions. You can find more information about the Canadian tax system on the Canada Revenue Agency website.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option7') {
    paragraph = 'As a UK citizen, you can visit Bali, Indonesia for up to 30 days without a visa, as long as you are entering for tourism purposes only. If you plan to stay in Bali for more than 30 days or engage in any kind of work or business activity, you will need to obtain a visa.\n\nTo obtain a visa to stay in Bali for a longer period of time, you can apply for a social/cultural visa, which is valid for up to 60 days and can be extended up to 4 times for 30 days each time. To apply for a social/cultural visa, you will need to go to the Indonesian embassy or consulate in your home country and provide the necessary documents, including a sponsorship letter from an Indonesian sponsor, a valid passport, and proof of financial support.\n\nIf you plan to work or engage in business activity in Bali, you will need to obtain a work permit and a business visa. To obtain a work permit, you will need to have a job offer from an Indonesian company and meet certain requirements. To obtain a business visa, you will need to have a business sponsor in Indonesia and provide the necessary documents, including a valid passport, a sponsorship letter, and proof of financial support.\n\nIt\'s important to note that Bali, like the rest of Indonesia, has its own unique cultural and legal practices, so it\'s a good idea to familiarize yourself with local customs and laws before traveling there. It\'s also important to make sure you have adequate health insurance coverage and to take necessary health precautions, such as getting required vaccinations and taking precautions against mosquito-borne illnesses.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option6') {
    paragraph = 'As a UK citizen, you can visit Australia for up to 3 months as a tourist without the need for a visa. If you plan to work, study or stay in Australia for a longer period of time, you will need to apply for the appropriate visa.\n\nThere are a variety of visas available for UK citizens who want to work, study or live in Australia, including:\n\n• Working Holiday visa: This visa allows UK citizens between the ages of 18 and 30 to work and travel in Australia for up to 12 months.\n• Skilled Worker visa: This visa is for skilled workers who have been nominated by an Australian employer and meet the requirements for a particular occupation.\n• Student visa: This visa allows UK citizens to study at an Australian educational institution for a specified period of time.\n\nTo apply for any of these visas, you will need to meet certain requirements, such as demonstrating a certain level of proficiency in English and providing evidence of sufficient financial resources to support yourself during your stay.\n\nIt\'s also important to familiarize yourself with the Australian tax system before you begin working in the country. You will need to pay income tax on any money you earn in Australia, and you may be eligible for certain tax credits and deductions. You can find more information about the Australian tax system on the Australian Taxation Office website.\n\nIt\'s important to note that the Australian government regularly updates its immigration policies and visa requirements, so it\'s a good idea to check the official Australian government immigration website or consult with an immigration lawyer for the most up-to-date information.';
  }

  return (
    <View>
      {/* <View style={styles.banner}>
        <Text style={styles.bannerText}>Test banner</Text>
      </View> */}

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.app}>
          <View style={styles.container}>
            <View style={styles.dropdown}>
            <Text style={styles.label}>Citizenship you have:</Text>
            <Picker
              selectedValue={selectedOption1}
              onValueChange={handleOption1Change}
            >
              <Picker.Item label="UK" value="option1" />
              {/* <Picker.Item label="France" value="option2" />
              <Picker.Item label="Germany" value="option3" /> */}
            </Picker>
          </View>

          <View style={styles.dropdown}>
            <Text style={styles.label}>Country you want to live in:</Text>
            <Picker
              selectedValue={selectedOption2}
              onValueChange={handleOption2Change}
            >
              <Picker.Item label="UK" value="option1" />
              <Picker.Item label="France" value="option2" />
              <Picker.Item label="Germany" value="option3" />
              <Picker.Item label="Spain" value="option4" />
              <Picker.Item label="Canada" value="option5" />
              <Picker.Item label="Australia" value="option6" />
              <Picker.Item label="Bali" value="option7" />
            </Picker>
          </View>
            <View style={styles.paragraphbox}>
              <Text style={styles.paragraph}>{paragraph}</Text>
            </View>
          </View>
        </View>

        <View style={styles.banner}>
        <Text style={styles.bannerText}></Text>
      </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#001F3F',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    marginTop: 10,
    marginHorizontal:10,
  },
  dropdown: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
  },
  firstcontainer: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 30,
    marginHorizontal:20,
    marginTop:20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginHorizontal:6,
  },
  paragraphbox: {    
    borderRadius: 0,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    marginHorizontal:-20,
  },
  banner: {
    backgroundColor: '#FFFFFF',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: '#001F3F',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 30,
  },
  paragraph: {
    marginTop: 20,
    fontSize: 16,
    marginHorizontal:10,
    marginBottom:25,
  },
  bulletContainer: {
    marginTop: 10,
  },
  bulletText: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 10,
  },
  descriptionhome:{
    fontSize:16,
    marginHorizontal:20,
    marginTop:20,
    marginBottom:20,
  },

});

export default App;
