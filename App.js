import React from 'react';
import { View, Button } from 'react-native';

const Home = () => {
  const handleTelegramButtonClick = () => {
    window.location.href = 'https://oauth.telegram.org/auth?bot_id=7122476551:AAGRldhloWEs-_jWsEkOTMZEsXhGE0dbXWQ&scope=write&nonce=12345678&origin=https://zvezzzdanutiythree.netlify.app/&request_access=write&return_to=github.com'
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Авторизация через Telegram" onPress={handleTelegramButtonClick} />
    </View>
  );
};  

export default Home;
