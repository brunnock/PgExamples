const initState = {code:'', output:'', error:null};

function reducer(state2, action) {
  let state = structuredClone(state2);

  //console.log(action);
  switch (action.type) {

  case 'setValue':
    state[action.key] = action.value;
    break;

  case 'run':
    break;

  case 'reset':
    state.output='';
    state.error = null;
    break;

  case 'setError':
    state.output = {};
    state.error = action.error;
    break;

  case 'setOutput': {
    state.error=null;
    let result = action.result;
    if ((typeof result)==='object') {
      state.output={};
      let data = result[0].rows;
      state.output.data=data;
      if (data.length>1)
	state.output.fields = result[0].fields.map(x=>x.name)
    } else {
      state.output = result.toString();
    }
    break;
  }
    
    
  }
  //console.log(state);
  return state;
}

export {initState, reducer};
