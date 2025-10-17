import React from 'react';
import {initState,reducer} from './reducer.js';
import Output from './Output.jsx';


function Example({title,text,code,pg}) {
  const [state, dispatch] = React.useReducer(reducer, initState);
  const textRef = React.useRef(null);

  function run() {
    if (textRef.current.value) {
      pg.exec(textRef.current.value)
	.then(result=>{
	  dispatch({type:'setOutput', result:result});
	  //setUpdate(true);
	})
	.catch(err=>dispatch({type:'setError', error:err.message}));
      //dispatch({type:'run', input:textRef.current.value});
    }
    dispatch({type:'setValue', key:'output', value:''});
  }
  
  const reset = () => {
    textRef.current.value=code;
    dispatch({type:'reset'});
  }


  return (
    <section className='example'>
      <h3>{title}</h3>
      <div className='text' dangerouslySetInnerHTML={{__html:text}} />
      <textarea ref={textRef} defaultValue={code} rows={code.split(/\n/).length} />
      <Output state={state} />
      <div className='buttons'>
	<button onClick={run}>Run</button>
	<button onClick={reset}>Reset</button>
      </div>
    </section>
  )
}

export default Example;

