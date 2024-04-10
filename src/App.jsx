
import { RecoilRoot, useRecoilState } from 'recoil'
import './App.css'
import { BackgroundColorAtom } from './backgroundColor'
function App() {
  return (
    <RecoilRoot>
      <BackgroundColorChanger />
    </RecoilRoot>
  )
}
function BackgroundColorChanger() {
  const [backgroundColor,backgroundState] = useRecoilState(BackgroundColorAtom)

  function BackgroundChanger(Color) {
    backgroundState(Color)
  }

  return (
    <div id="parentDiv" style={{ backgroundColor: backgroundColor }} >
      <div id='mainDiv'>
        <div id='red' onClick={() => BackgroundChanger('red')}>Red</div>
        <div id='yellow' onClick={() => BackgroundChanger('yellow')}>Yellow</div>
        <div id='black' onClick={() => BackgroundChanger('black')}>Black</div>
        <div id='purple' onClick={() => BackgroundChanger('purple')}>Purple</div>
        <div id='green' onClick={() => BackgroundChanger('green')}>Green</div>
        <div id='blue' onClick={() => BackgroundChanger('blue')}>Blue</div>
        <div id='default' onClick={() => BackgroundChanger('white')}>Default</div>
      </div>
    </div>
  )
}

export default App