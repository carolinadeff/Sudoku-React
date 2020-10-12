Jogo da velha (tutorial) e Sudoku em React.

No site do React tem um tutorial para criar um jogo da velha, bem interessante para consolidar alguns conceitos de estado, atualização de componentes e ciclo de vida. Aproveitei o embalo e criei um joguinho sudoku. A aplicação inicia em uma página de seleção, e direciona para um, ou outro.

No final do tutorial (joguinho da velha) só inclui o armazenamento das posições das casas vencedoras para inserir uma cor na respectivas casas quando alguém vence.

Sobre o Sudoku - Utilizei conceitos de matrizes para armazenar os valores e posições e para fazer as verificações relativas as regras do jogo, rearranjando os dados em linhas e colunas, além das nove áreas quadradas que compõe o "tabuleiro" do jogo.

Lembrando, a área do jogo é composta por nova quadrados (3x3), com nove lacunas cada (3x3), que recebem valores de 1 a 9.
A lógica de verificação deve confirmar que cada linha, coluna e quadrado tenha todas as lacunas preenchidas, sem repetir números e somando 45. Quando todas as linhas, colunas e quadrados satisfazem essas regras o jogo está ganho.

Para resolver isso armazenei os valores em um array e as posições matriciais [i, j] em outro de mesmo formato. A array de valores passa pela verificação e retorna um array booleano, que então filtra o array de posições.

As soluções (setups iniciais, números fixos) foram retiradas de: http://www.sudoku.org.uk/MMPackSolutions.asp;

<div style="display:flex align-items:flex-start">
<img src="https://i.imgur.com/iJXtAhw.jpg" width="300" />
<img src="https://i.imgur.com/94oBWpZ.jpg" width="300" />
<img src="https://i.imgur.com/MLf0du3.jpg" width="300" />
</div>

Readme do React-------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
