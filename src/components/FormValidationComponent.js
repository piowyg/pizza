import { useState } from 'react';

const FormValidationComponent = (props) => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const [surname, setSurname] = useState('');
    const [surnameError, setSurNameError] = useState('');

    const [phoneNumber, setphoneNumber] = useState('');
    const [phoneNumberError, setphoneNumberError] = useState('');

    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('');

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const [apartment, setApartment] = useState('');


    const handleInputChange = (event) =>{
        const target = event.target;
        var value = target.value;
        const name = target.name;
        switch (name){
            case "name":
                setName(value)
                break
            case "surname":
                setSurname(value)
                break
            case "email":
                setEmail(value)
                break;
            case "phoneNumber":
                setphoneNumber(value)
                break;    
            case "city":
                setCity(value)
                break; 
            case "address":
                setAddress(value)
                break; 
            case "apartment":
                setApartment(value)
                break; 
            default:
                break;
        }
      }

      const validate = () => {
        let nameError = "";
        let emailError = "";
        let surnameError = "";
        let phoneNumberError = "";
        let cityError = "";
        let addressError = "";


        if (!name) {
          nameError = "Imię jest wymagane";
        }

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || reg.test(email) === false) {
          emailError = "Email jest niepoprawny";
        }

        if (!surname) {
            surnameError = "Nazwisko jest wymagane";
        }

        var pattern = /\d{9}/;
        if (!phoneNumber || phoneNumber.match(pattern) === false) {
            phoneNumberError = "Numer telefonu jest niepoprawny";
        }

        if (!city) {
            cityError = "Miasto jest wymagane";
        }

        if (!address) {
            addressError = "Adres jest wymagany";
        }

        if (emailError || nameError || surnameError || phoneNumberError || cityError || addressError) {
          setEmailError(emailError);
          setNameError(nameError);
          setSurNameError(surnameError);
          setphoneNumberError(phoneNumberError);
          setCityError(cityError);
          setAddressError(addressError);
          return false;
        }
        return true;
      }

      const submit = () =>{
        if (validate()) {
            props.onSubmit([name,surname,email,phoneNumber,city, address, apartment]);
            setEmailError('');
            setNameError('');
            setSurNameError('');
            setphoneNumberError('');
            setCityError('');
            setAddressError('');
        }
      }

    return (
        <div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2>Dane użytkownika</h2>
              <br />
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Imię :</label>
                  <input
                    type="text"
                    className="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  />
                  <div className="form-group col-md-6">
                        <span className="text-danger">{nameError}</span>
                    </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Nazwisko :</label>
                  <input
                    type="text"
                    className="surname"
                    name="surname"
                    value={surname}
                    onChange={handleInputChange}
                  />
                  <div className="form-group col-md-6">
                        <span className="text-danger">{surnameError}</span>
                    </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Email :</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                  <div className="form-group col-md-6">
                        <span className="text-danger">{emailError}</span>
                    </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Nr telefonu :</label>
                  <input
                    type="text"
                    className="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                  />
                  <div className="form-group col-md-6">
                        <span className="text-danger">{phoneNumberError}</span>
                    </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Miasto :</label>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleInputChange}
                  />
                    <div className="form-group col-md-6">
                        <span className="text-danger">{cityError}</span>
                    </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Adres :</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={handleInputChange}
                  />
                   <div className="form-group col-md-6">
                       <span className="text-danger">{addressError}</span>
                    </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Mieszkanie (opcjonalne) :</label>
                  <input
                    type="text"
                    name="apartment"
                    value={apartment}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-12 text-center">
                 {!props.isPending && <button
                    type="submit"
                    className="btn btn-primary submit"
                    onClick={submit}
                  >
                    Zamów
                  </button> }
                  {
                    props.isPending && <button
                    disabled
                    type="submit"
                    className="btn btn-primary submit"
                    onClick={submit}
                  >
                    Przetwarzanie zamówienia...
                  </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default FormValidationComponent;
