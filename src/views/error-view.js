import html from 'choo/html'

export default () =>
  html`
    <h1 id="cam-error">
      ${/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream
        ? 'En iOS, No funciona con este browser. Usa Safari.'
        : 'Tu Explorador o Dispositivo tiene que tener cámara activada.'}
    </h1>
  `
