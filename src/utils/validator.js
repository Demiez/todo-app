const validator = (eventItems, name, value) => {
    let valid = true;
    switch(name){
        case "title": {
            if (Object.entries(eventItems.length)) {
                eventItems.map((item) => {
                    // console.log("Validator: ", item, value);
                    if (value === item.title) {
                        console.log(true);
                        valid = false;
                    }
                })
            }
            if (!value) valid = false;
            return valid;
        }
        case "desc": {
            if (!value) valid = false;
            return valid;
        }
        case "date": {
            if (!value) valid = false;
            return valid;
        }
        default:
            return valid;
    }
};

export default validator;
