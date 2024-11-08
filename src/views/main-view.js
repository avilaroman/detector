import html from 'choo/html'

export default (state, prev, send) =>
  html`
    <section id="main-view" class="${state.isSnapping ? 'faded' : ''}">
      ${!state.firstTime && state.translation
        ? html`
            <div class="row">
              <h2>${state.translation}</h2>
              <h4 onclick="${() => send('showList')}">${state.activeLang}</h4>
            </div>
          `
        : null}
      ${!state.firstTime && state.label
        ? html`
            <div class="row">
              <h2>${state.label}</h2>
              <h4>${state.targetLang}</h4>
            </div>
          `
        : null}
      ${state.cameraReady
        ? html`
            <div
              id="shutter-button"
              class="${state.isSnapping ? 'busy' : ''}"
              onclick="${() => send('snap')}"
            ></div>
          `
        : null}
      ${state.firstTime && state.cameraReady
        ? html`
            <h5 id="first-time">Prueba tomando una foto de algo. Centrado y grande.</h5>
          `
        : null}
      <div class="debug">${state.guesses}</div>
    </section>
  `
