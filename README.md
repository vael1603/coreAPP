### TODO ##

### config ###
Para clonar a partir de este proyecyo ejecutar:
npx degit eliasdev/angular-template-base nombre-nuevo-proyecto

angularTemplateApp cambiar por nombre nuevo

### APP ESTRUCTURE###
src/
├── app/
│   ├── core/                    # Infraestructura central: interceptores, guards, servicios core
│   │   ├── interceptors/
│   │   ├── guards/
│   │   ├── services/
│   │   └── core.module.ts
│
│   ├── shared/                  # Componentes, pipes y módulos reutilizables
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.module.ts
│
│   ├── state/                   # Estado global con NgRx
│   │   ├── app.actions.ts
│   │   ├── app.reducer.ts
│   │   ├── app.effects.ts
│   │   ├── app.selectors.ts
│   │   └── app.state.ts
│
│   ├── features/                # Agrupación por dominio funcional (¡el corazón de la arquitectura!)
│   │   ├── auth/                # Dominio "auth"
│   │   │   ├── components/      # FormLoginComponent, InputPasswordComponent
│   │   │   ├── services/        # AuthService (application-level) 
│   │   │   ├── pages/           # LoginPage, RegisterPage
│   │   │   ├── store/           # auth.actions.ts, auth.reducer.ts
│   │   │   └── models/          # modelos y contratos
│   │   │   └── auth.routes.ts   # rutas del feature
│   │   ├── users/
│   │   └── employees/
│
│   ├── app.routes.ts            # Enrutamiento general con lazy loading
│   └── app.component.ts
│
├── assets/                      # Archivos estáticos (i18n, imágenes, etc.)
│   └── i18n/
├── environments/                # Config por entorno
├── styles/                      # SCSS global + Tailwind
│   └── _theme.scss
├── tailwind.config.js
└── index.html


### 🛠️ **Paso a paso sugerido para armar tu template**

#### 1. **Crear el proyecto base**
```bash
ng new angular-template --routing --style=scss
cd angular-template
```

#### 2. **Tailwind CSS**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
Configurá `tailwind.config.js` y agregá los estilos en `styles.scss`.

#### 3. **Angular Material**
```bash
ng add @angular/material
```
Podés crear un `SharedModule` y ahí importar los módulos más usados.

#### 4. **Lazy Loading + Router**
- Creamos un módulo de feature (`Dashboard`, `Auth`, etc.)
- Usamos `loadChildren` en `app-routing.module.ts`.

#### 5. **Transloco**
```bash
ng add @ngneat/transloco
```
Configurás el loader y generás archivos `en.json`, `es.json`, etc.

#### 6. **ESLint y Prettier**
```bash
ng add @angular-eslint/schematics
npm install -D prettier eslint-config-prettier
```
Configurá `.eslintrc.json` y `.prettierrc`.

#### 7. **Playwright + Jasmine**
```bash
ng add @playwright/test
ng test # Jasmine ya viene con Angular
```

#### 8. **Signals + RxJS**
- Usá `signal()` para estados locales y `computed()`, `effect()`.
- Usa `RxJS` para data compartida, streams, etc.

#### 9. **CRUD con Autenticación**
- Crea un `AuthService` y `AuthGuard`.
- Usa `HttpClient`, interceptor y fake backend/mock si querés practicar sin API real.

#### 10. **CHANGELOG automático**
```bash
npm install -D standard-version
```
En `package.json`:
```json
"scripts": {
  "release": "standard-version"
}
```

---

### 💡 Sugerencia
Cuando tengas todo listo, subilo a un repo como `angular-template-base`, y con cada nuevo proyecto solo tenés que hacer:

```bash
npx degit eliasdev/angular-template-base nombre-nuevo-proyecto
```


# angularTemplateApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
