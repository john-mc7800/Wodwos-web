import React from 'react';
import Nav from './Nav/Nav';

const ContactUs = () => {
  return (
    <>
      <div className="relative w-full py-14 md:pb-28">
        {/* Background Image */}
        <img src="./banner.png" className="absolute left-0 top-0 z-0 h-full w-full" alt="background" />
        <div>
          <div className="relative mx-auto flex w-[90%] items-center justify-end gap-10 py-10 font-Inter coxs:flex-col lg:flex-row">
            {/* Image Container */}
            <div className="order-1 flex items-center justify-center lg:w-[50%]">
              <img src="./team.png" className="my-auto w-full rounded-md coxs:w-[300px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] 3xl:w-[800px] maxlg:ml-[5.6%] maxlg:h-full" alt="contact us" />
            </div>

            {/* Text Container */}
            <div className="relative z-10 text-center lg:w-[50%] lg:text-left">
              <h1 className="text-3xl font-bold text-white md:text-4xl md:leading-[60px] lg:text-5xl xl:text-6xl">
                Let’s Discuss Your Project and Turn Your <span className="text-[#f72d74]">Vision Into Reality</span>!
              </h1>
              <p className="mt-4 w-full leading-9 text-[#e8e6e6] lg:pl-4 xl:text-lg">The start of your next chapter is just one form submission away from reality.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9f9f9]">
        <div className="mx-auto w-[90%] max-w-[1440px] coxs:pb-32 coxs:pt-12 lg:pt-16 xl:pt-20">
          <h2 className="text-left font-bold text-[#000000] coxs:text-2xl lg:text-3xl">Contact Us</h2>
          <p className="mb-7 mt-4 w-full max-w-4xl text-left text-base font-normal text-[#272821]">
            To contact us, simply fill out the form at the bottom of this page. To send us an RFP, RFI or other project specifications, email us at <span className="text-[#f72d74]">info@wodwes.com</span>
          </p>
        </div>
      </div>

      <div className="mx-auto w-[90%] max-w-[1440px] py-20">
        <div className="mx-auto -mt-[180px] h-full xs:w-5/6">
          <h2 className="text-lg font-bold text-[#272821]">Our Main Office</h2>
          <div className="mt-2 grid items-center overflow-hidden rounded-[10px] bg-white shadow-[4px_4px_19px_0px_rgba(0,0,0,0.10)] lg:grid-cols-[300px_auto] xl:grid-cols-[400px_auto] 2xl:grid-cols-[500px_auto]">
            {/* Image Container */}
            <div className="h-full">
              <img src="./address.png" className="h-full w-full maxxl:object-cover" alt="Office Location" />
            </div>

            {/* Content Section */}
            <div className="w-full space-y-14 px-5 py-10 lg:pl-14">
              {/* Address */}
              <div className="flex items-center gap-2">
                <img src="./location.svg" className="h-5 w-5" alt="Location Icon" />
                <div className="flex items-center gap-2">
                  <h3 className="whitespace-nowrap font-bold leading-6 coxs:text-base lg:text-xl">Address:</h3>
                  <address className="not-italic maxlg:text-sm">30N Gold ST, Sheridan, US</address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <img src="./phone.svg" className="h-5 w-5" alt="Phone Icon" />
                <div className="flex items-center gap-2">
                  <h3 className="whitespace-nowrap font-bold leading-6 coxs:text-base lg:text-xl">Phone:</h3>
                  <address className="not-italic maxlg:text-sm">+1 917 000 3956</address>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <img src="./email.svg" className="h-5 w-5" alt="Email Icon" />
                <div className="flex items-center gap-2">
                  <h3 className="whitespace-nowrap font-bold leading-6 coxs:text-base lg:text-xl">Email:</h3>
                  <address className="not-italic maxlg:text-sm">info@wodwes.com</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <img src="./banner.png" className="absolute top-0 z-0 h-full w-full" alt="product we develope" />
        <div className="relative z-10 mx-auto w-[90%] max-w-[1440px] gap-10">
          <div className="w-full max-w-[572px] text-white">
            <h2 className="text-3xl font-bold">Contact US</h2>
            <p className="mt-2">Fill out the form below and we will contact you shortly</p>
          </div>

          <form>
            <div className="mx-auto mt-10 grid grid-cols-2 gap-x-7 gap-y-3 md:w-3/4">
              <input type="text" className="input h-16 rounded-md bg-white px-5 text-gray-500" placeholder="First Name" required />
              <input type="text" className="input h-16 rounded-md bg-white px-5 text-gray-500" placeholder="Last Name" required />
              <input type="text" className="input h-16 rounded-md bg-white px-5 text-gray-500" placeholder="Email" required />
              <input type="text" className="input h-16 rounded-md bg-white px-5 text-gray-500" placeholder="Phone Number" required />
              <input type="text" className="input h-16 rounded-md bg-white px-5 text-gray-500" placeholder="Company" required />
              <select className="input h-16 rounded-md bg-white px-5 text-gray-500" required>
                <option value="" className="">
                  Country
                </option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Aland">Aland Island</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="America">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>

                <option value="Antarctica">Antartica</option>

                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Austrailia">Austrailia</option>
                <option value="Azarbaijan">Azarbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Aruba">Aruba</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovnia</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Terrotory">British Indian Ocean Terrotory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="combodia">combodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Island">Cayman Island</option>
                <option value="Central african Republic">Central african Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Island">Cocos (Keeling) Island</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of the">Congo, The Democratic Republic of the</option>
                <option value="Cook Island">Cook Island</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egpyt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethopia">Ethopia</option>
                <option value="Falkland Island (Malvinas)">Falkland Island (Malvinas)</option>
                <option value="Faroe Island">Faroe Island</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltor">Gibraltor</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Geranda">Geranda</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Gua</option>
                <option value="Guernsey">Guernesey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonalds Island">Heared Island and Mcdonalds Island</option>
                <option value="Holy see (Vatican City State)">Holy see (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of"> Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea Democratic Peoples'S Republic of">Korea Democratic Peoples'S Republic of</option>
                <option value="Korea, Republic of"> Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao Peoples's Democratic Republic ">Lao Peoples's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanono</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourge</option>
                <option value="Macao">Macao</option>
                <option value="Mecedonia, The Former Yugoslav Republic of"> Mecedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagscar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Island">Marshall Island</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritiana">Mauritiana</option>
                <option value="Mauritious">Mauritious</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of </option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mangolia">Mangolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Calendonia">New Calendonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk land</option>
                <option value="Northern Mariana Island">Northern Mariana Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philipines">Philipines</option>
                <option value="Pitcarin">Pitcarin</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="RAWANDA">RAWANDA</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Gerandies</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Sengel</option>
                <option value="Serbia and Montengerro">Serbia and Montengerro</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Siera Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovenia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Island">Solomon Island</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and the South Sandwich Islansd">South Georgia and the South Sandwich Island</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switerzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan, Provice of China">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkemanistan">Turkemanistan</option>
                <option value="Turks and Caicos Island">Turks and Caicos Island</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Amirates">United Arab Amirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Island">United States Minor Outlying Island</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Island, British">Virgin Island, British</option>
                <option value="Virgin Island, U.S.">Virgin Island, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <textarea className="col-span-2 rounded-[10px] bg-white p-5 text-sm text-gray-500 outline-none" rows={10} placeholder="Message" required></textarea>
              <div className="col-span-2 flex flex-wrap justify-between gap-5 pt-5 sm:items-center maxsm:flex-col">
                {/* Checkbox Section */}
                <label className="relative flex cursor-pointer items-center gap-2 text-sm leading-5 text-white">
                  <input type="checkbox" className="h-5 w-5 cursor-pointer rounded-md border border-gray-500 bg-transparent accent-[#f72d74] checked:border-[#f72d74] checked:bg-[#f72d74] focus:outline-none" />
                  <span>I want to receive news and updates once in a while</span>
                </label>

                {/* Button Section */}
                <div className="flex justify-center">
                  <button type="submit" className="flex w-[200px] items-center justify-center border-2 border-[#f72d74] bg-transparent px-5 py-3 font-semibold text-white hover:bg-[#f72d74] hover:text-white">
                    <span>Get Started</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
