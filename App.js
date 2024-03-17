import React from 'react';
import { View, Button } from 'react-native';

const Home = () => {
  const handleTelegramButtonClick = () => {
    window.location.href = 'https://telegram.org/js/telegram-widget.js?22&data-telegram-login=Rjaka_prikol_bot&data-size=large&data-auth-url=https://github.com/&data-request-access=write'
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Авторизация через Telegram" onPress={handleTelegramButtonClick} />
    </View>
  );
};  

export default Home;
