
function containsLettersAndSpace(str){
    return /^[A-Za-z\s]+$/.test(str)
}
function containsNumber(str){
    return /^\d+$/.test(str)
}

export function validate(input) {
    let errors = {};
    if (!input.name || input.name === '') {
      errors.name = 'Name is required';
    } else if (!containsLettersAndSpace(input.username)) {
      errors.name = 'Name is invalid';
    }
    if(!input.min_height && !input.max_height) {
      errors.min_height = 'Height is required';
    }
    if(!containsNumber(input.min_height)) {
      errors.min_height = 'min height is invalid';
    }
    if(!containsNumber(input.max_height)){
       errors.max_height = 'max height is invalid';
    }
    if(!input.min_weight && !input.max_weight){
        errors.min_weight='Weight is required'
    }
    if(!containsNumber(input.min_weight)) {
        errors.min_weight = 'min weight is invalid';
    }
    if(!containsNumber(input.max_weight)){
        errors.max_weight = 'min weight is invalid';
    }
    if(!containsNumber(input.min_life_span)) {
        errors.min_life_span = 'min lifespan is invalid';
    }
    if(!containsNumber(input.max_life_span)){
        errors.max_life_span= 'max lifespan is invalid';
    }
    return errors;
  };

  