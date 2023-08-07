//create a button that allows you to pick users and add it to the app.jsx
//side note for me,its similar to yesturday lesson - think of the pizza lesson
//make a function to call out to inividual ppl
//

//add this to the app.jxs
function Picking() {
    // const [count, setCount] = useState(0);
     const Idnames = ['name', 'username', 'email', 'phone'];
     console.log(Idnames);
     return (
       <div className="card">
         {/* <Button number={count} setNumber={setCount} /> */}
         <Contactppl type={Idnames} size="medium"/>
       </div>
     );
   }
   
   
   export default App;


   //keep this here, makes some edits to line 25 to the end
//    const Contactppl = (props) => {
    
//     const {type, size} = props;
//     return (
//         <>
//         <h1>Here a person you can contact!</h1>
//         <h2>Type: {type[0]} and also {type[2]} </h2>
//         <h2>Size: {size}</h2>
//         </>
//     )
// }
// export default Pizza;