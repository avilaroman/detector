import html from 'choo/html'

export default () =>
  html`
    <h1 id="cam-error">
      ${/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream
        ? 'En iOS, No funciona con este browser. Usa Safari.'
        : 'Tienes que activar la Cámara en tu Explorador o Dispositivo. Activala y puedes actualizar.'}
    </h1>
  `
