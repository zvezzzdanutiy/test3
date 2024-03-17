import React from 'react';
import { View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Home = () => {
  const handleTelegramButtonClick = () => {
    // Открыть WebView с авторизацией Telegram
    setTelegramLoginVisible(true);
  };

  const handleMessage = (event) => {
    const { data } = event.nativeEvent;
    if (data === 'loggedIn') {
      // Перенаправление на https://github.com
      setTelegramLoginVisible(false);
      webViewRef.current.stopLoading();
      webViewRef.current.injectJavaScript(`
        window.location.href = 'https://github.com';
      `);
    }
  };

  const webViewRef = React.useRef(null);
  const [telegramLoginVisible, setTelegramLoginVisible] = React.useState(false);

  React.useEffect(() => {
    if (telegramLoginVisible) {
      // Установить флаг origin в LocalStorage для авторизации Telegram
      // чтобы избежать ошибки домена
      const origin = 'https://zvezzzdanutiyfour.netlify.app/';
      webViewRef.current.injectJavaScript(`
        localStorage.setItem('tg_origin', '${origin}');
      `);
    }
  }, [telegramLoginVisible]);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Авторизация через Telegram" onPress={handleTelegramButtonClick} />
      {telegramLoginVisible && (
        <WebView
          ref={webViewRef}
          source={{ uri: 'https://oauth.telegram.org/auth?bot_id=7122476551:AAGRldhloWEs-_jWsEkOTMZEsXhGE0dbXWQ&scope=write&public_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKscJrqo4aPZ+rP/PJixKqmMydgaZkMLIbbbLdNLV2W5WgQlku8TQaKDOtZVljrVuW/7j4IYtaP1KS8EwhOAUkcCAwEAAQ==&nonce=12345678&origin=https://zvezzzdanutiyfive.netlify.app/&request_access=write&return_to=https://github.com/' }}
          onMessage={handleMessage}
        />
      )}
    </View>
  );
};

export default Home;
