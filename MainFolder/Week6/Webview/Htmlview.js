import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

export default function Htmlview() {
  const HTML = `
  <html>
    <head>
    <style>
    
        h1 {text-align: center;}
        p {text-align: center;}
        div {text-align: center;}
    </style>
    
 
    </head>
    <body>

    <h1 style="font-size:90px">Iron Man Poster</h1>
    <p style="font-size:50px">Iron Man 1 Poster</p>
    <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="960"
     height="1600">
     <p style="font-size:30px" >Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow.</p>

        </body>
    </html>
    
    `;
  return (
    <WebView
      domStorageEnabled={true}
      javaScriptEnabled={true}
      bounces={true}
      scrollEnabled={true}
      startInLoadingState={true}
      source={{
        html: HTML,
      }}
    />
  );
}
