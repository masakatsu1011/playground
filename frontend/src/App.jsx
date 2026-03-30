import { useState } from 'react'
import { Button } from './components/ui/Button';


export const App = () => {
  const[showAnswer, setShowAnswer] = useState(false);
  const toggle = () => setShowAnswer(!showAnswer);

  console.log("現在の状態(showAnswer):", showAnswer);

  return (
    <div style={{ padding: "30px" }}>
      <h1>ボタンのテスト</h1>

      <Button 
        label={showAnswer ? "正解を隠す" : "正解を確認する"}
        onClick={toggle} />

     {showAnswer && (
        <div style={{ marginTop: "20px", color: "blue" }}>
          <p>正解は42です</p>
        </div>
      )}


      <div style={{ marginTop: "10px" }}>
        <Button label="次の問題へ" onClick={() => console.log("Next")} color="#059669" />
      </div>
    </div>
  );
};




export default App
