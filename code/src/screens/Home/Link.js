import { Box, Pressable, VStack, Text } from '@gluestack-ui/themed';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { LanguageContext, LibrarySystemContext, ThemeContext } from '../../context/initialContext';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { logDebugMessage, logErrorMessage } from '../../util/logging';
import * as WebBrowser from 'expo-web-browser';

const HomeScreenLinkGrid = () => {
     const { homeScreenLinks } = React.useContext(LibrarySystemContext);

     return (
          <Box flexDirection="row" flexWrap="wrap">
               {homeScreenLinks?.map((item, index) => {
                    const isLastOdd = homeScreenLinks.length % 2 === 1 && index === homeScreenLinks.length - 1;
                    return (
                         <Box
                              key={item.id || index}
                              width={isLastOdd ? "100%" : "50%"}
                              alignItems={isLastOdd ? "center" : "flex-start"}
                              marginBottom={16}
                         >
                              <Link link={item} />
                         </Box>
                    );
               })}
          </Box>
     );
}

const Link = ({link, key}) => {
     const navigation = useNavigation();
     const { theme } = React.useContext(ThemeContext);
     const { language } = React.useContext(LanguageContext);
     const { library } = React.useContext(LibrarySystemContext);

     const handleOpenLink = () => {
          // Open external link in web browser based on link.linkUrl
          try {
               WebBrowser.openBrowserAsync(link.linkUrl).catch((err) => {
                    logErrorMessage('Failed to open browser: ' + err);
               });
          } catch (e) {
               logErrorMessage('Error opening link: ' + e);
          }
     }

     const handleOpenScreen = () => {
          // Navigate to internal screen based on link.deepLinkPath
          const segments = link.deepLinkPath.split('/');
          if (segments.length === 1) {
               navigation.navigate(segments[0]);
          } else if (segments.length === 2) {
               navigation.navigate(segments[0], { id: segments[1] });
          } else {
               // Handle more complex paths as needed
               navigation.navigate(segments[0], { path: segments.slice(1) });
          }

     }

     return (
          <Pressable onPress={(link.linkType === '1' || link.linkType === 1) ? handleOpenLink : handleOpenScreen} key={key} alignItems="center" justifyContent="center" padding={12} width="90%" borderRadius={8} backgroundColor={theme['colors']['background']['200']} >
               <VStack>
                    {link.typeOfIcon === 'imageUpload' && link.uploadIcon ? (
                         <Image
                              source={{ uri: link.uploadIcon }}
                              style={{ width: 64, height: 64, marginBottom: 8 }}
                              contentFit="contain"
                         />
                    ) : (
                         <MaterialIcons
                              name={link.materialIcon || 'link'}
                              size={64}
                              color={theme['colors']['primary']['600']}
                              style={{ marginBottom: 8 }}
                         />
                    )}
                    <Box
                         style={{
                              fontSize: 16,
                              fontWeight: '500',
                              color: theme['colors']['text']['900'],
                              textAlign: 'center',
                         }}
                    >
                         {link.title}
                    </Box>
               </VStack>
          </Pressable>
     )
}

export default HomeScreenLinkGrid;