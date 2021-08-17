
function containsLettersAndSpace(str){
    return /^[A-Za-z\s]+$/.test(str)
}
function containsNumber(str){
    return /^\d+$/.test(str)
}

export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } else if (!containsLettersAndSpace(input.username)) {
      errors.name = 'Name is invalid';
    }
    //height
    if(input.name && !errors.name && !input.min_height && !input.max_height) {
      errors.min_height = 'Height is required';
    }
    if(input.name && !errors.min_height && !containsNumber(input.min_height)) {
      errors.min_height = 'min height is must be a number';
    }
    if(input.name && !errors.min_height &&!containsNumber(input.max_height)){
       errors.max_height = 'max height is must be a number';
    }
    //weight
    if(input.name && !errors.min_height && !errors.max_height && !input.min_weight && !input.max_weight){
        errors.min_weight='Weight is required'
    }
    if(input.name && !errors.min_height && input.min_weight && !errors.min_weight && !containsNumber(input.min_weight)) {
        errors.min_weight = 'min weight is must be a number';
    }
    if(input.min_weight &&!errors.min_weight && !containsNumber(input.max_weight)){
        errors.max_weight = 'max weight is must be a number';
    }
    // if(!input.min_life_span && !input.max_life_span){
      
    // }
    //lifespan
    if(!errors.max_weight && input.min_weight && !containsNumber(input.min_life_span)) {
        errors.min_life_span = 'min lifespan is must be a number';
    }
    if(input.min_life_span && !containsNumber(input.max_life_span)){
        errors.max_life_span= 'max lifespan is must be a number';
    }
    return errors;
  };

  