(() => {

    const Filters = (props) => {
        let updateBrand = (clickEvent) => {
            props.updateFormState({
                Brand: clickEvent.target.value,
            });
        }

        let updateType = (clickEvent) => {
            props.updateFormState({
                Type: clickEvent.target.value,
            });
        }

        let updateStatus = (clickEvent) => {
            props.updateFormState({
                Status: clickEvent.target.checked,
            });
        }

        let updatePrice = (Event) => {
            props.updateFormState({
                Price: Event.target.value,
            })
        }

        

        return (
            <React.Fragment>
                <p><b>Filter your data</b>:</p>
                <div className='container custom-overflow'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <b>Shoe Brand</b>
                        </div>
                        <div className='col-md-3'>

                            <select
                                onChange={updateBrand}
                            >
                                <option value=''></option>
                                <option value='Nike'>Nike</option>
                                <option value='Jordan'>Jordan</option>
                                <option value='Converse'>Converse</option>
                                <option value='Vans'>Vans</option>
                                <option value='Adidas'>Adidas</option>
                                <option value='Timberland'>Adidas</option>
                                <option value='Champion'>Champion</option>
                                <option value='UGG'>UGG</option>
                                <option value='Crocs'>Crocs</option>
                                <option value='PUMA'>PUMA</option>
                                <option value='Reebok'>Reebok</option>
                                <option value='New Balance'>New Balance</option>
                                <option value='Asics'>Asics</option>
                                <option value='Birkenstock'>Birkenstock</option>
                                <option value='On'>On</option>
                                <option value='Bathing Ape'>Bathing Ape</option>


                            </select>
                        </div>
                        <div className='col-md-3'>
                            <b>Shoe Type</b>
                        </div>
                        <div className='col-md-3'>

                            <select
                                onChange={updateType}
                            >
                                <option value=''></option>
                                <option value='Basketball'>Basketball</option>
                                <option value='Soccer'>Soccer</option>
                                <option value='Skate'>Skate</option>
                                <option value='Running'>Running</option>
                                <option value='Volleyball'>Volleyball</option>
                                <option value='Tennis'>Tennis</option>
                                <option value='Clog'>Clog</option>
                                <option value='Boot'>Boot</option>
                                <option value='Walking'>Walking</option>
                                <option value='Slide'>Slide</option>
                                <option value='Slipper'>Slipper</option>
                                <option value='Platform'>Platform</option>



                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <b>Only Show Owned?</b>
                        </div>


                        <div className='col-md-3'>
                            <input
                                type='checkbox'
                                onChange={updateStatus}
                            />
                        </div>
                        <div className='col-md-3'>
                            <b>Price</b>
                        </div>


                        <div className='col-md-3'>
                            <input
                                type='text'
                                 onChange={updatePrice}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }

    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody><tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Colorway</th>
                        <th>Price</th>
                        <th>Owned</th>
                        <th>Type</th>
                        <th>Comfortability (1-10)</th>
                        <th>Style Rating (1-10)</th>
                    </tr>
                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.Name}</td>
                                    <td>{row.Brand}</td>
                                    <td>{row.Colorway}</td>
                                    <td>{row.Price}</td>
                                    <td>{row.Status === "Owned" ? 'Yes' : 'No'}</td>
                                    <td>{row.Type}</td>
                                    <td>{row.Comfortability}</td>
                                    <td>{row.Rating}</td>
                                </tr>
                            );
                        })}


                    </tbody></table><table></table></div>
        );
    }

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.originalData = props.originalData;

            this.state = {
                Brand: '',
                Type: '',
                Status: false,
                Price: '',
            };

            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        }


        render() {

            let filteredData = this.originalData;

            if (this.state.Brand !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.Brand === this.state.Brand
                });
            }

            if (this.state.Type !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.Type === this.state.Type
                });
            }

            if (true === this.state.Status) {
                filteredData = filteredData.filter(
                    (row) => {
                        return row.Status === "Owned"
                    });
            }

            if (this.state.Price !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.Price.includes(this.state.Price);
                });
            }

            return (
                <React.Fragment>
                    <Filters

                        updateFormState={this.updateFormState}

                    />

                    <hr />

                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );

        }

    }

    const shoeData = [
        {
            "Name": "Red Cement Retro 4",
            "Brand": "Jordan",
            "Colorway": "Red, White, Black",
            "Price": "100",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "5",
            "Rating": "10"
        },
        {
            "Name": "Cocao Wow Retro 4",
            "Brand": "Jordan",
            "Colorway": "Brown, White, Green",
            "Price": "100",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "5",
            "Rating": "9"
        },
        {
            "Name": "Retro 1 Mid",
            "Brand": "Jordan",
            "Colorway": "Blue, White, Black",
            "Price": "75",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "Forum Low",
            "Brand": "Adidas",
            "Colorway": "Brown, Off White",
            "Price": "90",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "9",
            "Rating": "8"
        },
        {
            "Name": "Panda Air Force 1",
            "Brand": "Nike",
            "Colorway": "Black, White",
            "Price": "95",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "7"
        },
        {
            "Name": "Platform Air Force 1",
            "Brand": "Nike",
            "Colorway": "White",
            "Price": "115",
            "Status": "Owned",
            "Type": "Platform",
            "Comfortability": "6",
            "Rating": "7"
        },
        {
            "Name": "Military Black Retro 4",
            "Brand": "Jordan",
            "Colorway": "Black, White",
            "Price": "222",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "5",
            "Rating": "10"
        },
        {
            "Name": "Cortez",
            "Brand": "Nike",
            "Colorway": "White, Red, Blue",
            "Price": "65",
            "Status": "Want",
            "Type": "Running",
            "Comfortability": "8",
            "Rating": "8"
        },
        {
            "Name": "Spider-Man Echo Clog",
            "Brand": "Crocs",
            "Colorway": "Black, Red, White",
            "Price": "75",
            "Status": "Owned",
            "Type": "Clog",
            "Comfortability": "10",
            "Rating": "8"
        },
        {
            "Name": "Hoops Pack Air Force 1",
            "Brand": "Nike",
            "Colorway": "White, Orange, Black, Cream",
            "Price": "95",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "7"
        },
        {
            "Name": "6 in Premium Boots ",
            "Brand": "Timberland",
            "Colorway": "Black",
            "Price": "110",
            "Status": "Owned",
            "Type": "Boot",
            "Comfortability": "6",
            "Rating": "7"
        },
        {
            "Name": "Old Skool",
            "Brand": "Vans",
            "Colorway": "Dark Cream",
            "Price": "70",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "5"
        },
        {
            "Name": "Old Skool",
            "Brand": "Vans",
            "Colorway": "Checkered, Cream",
            "Price": "70",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "7"
        },
        {
            "Name": "Club C Vintage",
            "Brand": "Reebok",
            "Colorway": "White, Dark Blue",
            "Price": "60",
            "Status": "Owned",
            "Type": "Tennis",
            "Comfortability": "7",
            "Rating": "6"
        },
        {
            "Name": "Lowland ComfyCush",
            "Brand": "Vans",
            "Colorway": "Blue, White",
            "Price": "85",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "8",
            "Rating": "8"
        },
        {
            "Name": "Cons One Star Pro",
            "Brand": "Converse",
            "Colorway": "White, Black",
            "Price": "75",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "8",
            "Rating": "8"
        },
        {
            "Name": "550",
            "Brand": "New Balance",
            "Colorway": "White, Grey",
            "Price": "90",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "8"
        },
        {
            "Name": "2002",
            "Brand": "New Balance",
            "Colorway": "Grey, White",
            "Price": "100",
            "Status": "Want",
            "Type": "Walking",
            "Comfortability": "9",
            "Rating": "8"
        },
        {
            "Name": "530",
            "Brand": "New Balance",
            "Colorway": "White, Light Blue",
            "Price": "100",
            "Status": "Want",
            "Type": "Walking",
            "Comfortability": "9",
            "Rating": "9"
        },
        {
            "Name": "550",
            "Brand": "New Balance",
            "Colorway": "Black, White",
            "Price": "90",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "8"
        },
        {
            "Name": "Jumpman Two Trey",
            "Brand": "Jordan",
            "Colorway": "White, Blue",
            "Price": "115",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "MVP",
            "Brand": "Jordan",
            "Colorway": "Gold, Shadow Brown, Brown Kelp",
            "Price": "165",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "Legacy 312 Low",
            "Brand": "Jordan",
            "Colorway": "White, Red, Black, Grey",
            "Price": "100",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "10"
        },
        {
            "Name": "Air Max 90",
            "Brand": "Nike",
            "Colorway": "White, Red, Grey",
            "Price": "100",
            "Status": "Owned",
            "Type": "Running",
            "Comfortability": "9",
            "Rating": "7"
        },
        {
            "Name": "Air Max 90",
            "Brand": "Nike",
            "Colorway": "White",
            "Price": "100",
            "Status": "Want",
            "Type": "Running",
            "Comfortability": "9",
            "Rating": "8"
        },
        {
            "Name": "Goldenstar",
            "Brand": "UGG",
            "Colorway": "Brown",
            "Price": "130",
            "Status": "Want",
            "Type": "Clog",
            "Comfortability": "9",
            "Rating": "8"
        },
        {
            "Name": "Tasman",
            "Brand": "UGG",
            "Colorway": "Black",
            "Price": "80",
            "Status": "Want",
            "Type": "Slipper",
            "Comfortability": "10",
            "Rating": "7"
        },
        {
            "Name": "University Hoody",
            "Brand": "Champion",
            "Colorway": "Brown",
            "Price": "50",
            "Status": "Owned",
            "Type": "Slipper",
            "Comfortability": "8",
            "Rating": "6"
        },
        {
            "Name": "Forum Low",
            "Brand": "Adidas",
            "Colorway": "White, Black",
            "Price": "90",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "9",
            "Rating": "10"
        },
        {
            "Name": "Adilette 22",
            "Brand": "Adidas",
            "Colorway": "White",
            "Price": "55",
            "Status": "Owned",
            "Type": "Slide",
            "Comfortability": "8",
            "Rating": "7"
        },
        {
            "Name": "Samba",
            "Brand": "Adidas",
            "Colorway": "Black, White",
            "Price": "100",
            "Status": "Want",
            "Type": "Soccer",
            "Comfortability": "7",
            "Rating": "7"
        },
        {
            "Name": "Superstar",
            "Brand": "Adidas",
            "Colorway": "Black, White",
            "Price": "80",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "7",
            "Rating": "9"
        },
        {
            "Name": "Superstar",
            "Brand": "Adidas",
            "Colorway": "White, Black",
            "Price": "80",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "7",
            "Rating": "7"
        },
        {
            "Name": "Air Force One",
            "Brand": "Nike",
            "Colorway": "Brown, Light Brown",
            "Price": "70",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "5",
            "Rating": "7"
        },
        {
            "Name": "Forum Low",
            "Brand": "Adidas",
            "Colorway": "White, Blue, Yellow",
            "Price": "90",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "9",
            "Rating": "9"
        },
        {
            "Name": "Court Borough",
            "Brand": "Nike",
            "Colorway": "Red, Black",
            "Price": "65",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "4",
            "Rating": "6"
        },
        {
            "Name": "6 Rings",
            "Brand": "Jordan",
            "Colorway": "White, Red",
            "Price": "75",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "6",
            "Rating": "7"
        },
        {
            "Name": "Sk8 Sta",
            "Brand": "Bathing Ape",
            "Colorway": "White, Metallic Silver",
            "Price": "200",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "7",
            "Rating": "8"
        },
        {
            "Name": "Sk8 Sta",
            "Brand": "Bathing Ape",
            "Colorway": "Green, Grey, White",
            "Price": "335",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "7",
            "Rating": "9"
        },
        {
            "Name": "Sk8 Sta",
            "Brand": "Bathing Ape",
            "Colorway": "Purple White",
            "Price": "374",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "7",
            "Rating": "7"
        },
        {
            "Name": "Dunk Low",
            "Brand": "Nike",
            "Colorway": "Black, Pink",
            "Price": "321",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "Retro 3",
            "Brand": "Jordan",
            "Colorway": "Red, White, Black",
            "Price": "150",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "8"
        },
        {
            "Name": "6 Rings",
            "Brand": "Jordan",
            "Colorway": "Desert Berry, White",
            "Price": "135",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "Boston",
            "Brand": "Birkenstock",
            "Colorway": "Black",
            "Price": "158",
            "Status": "Want",
            "Type": "Slide",
            "Comfortability": "6",
            "Rating": "7"
        },
        {
            "Name": "Suede Classic Squirtle",
            "Brand": "PUMA",
            "Colorway": "Blue, Dark Blue",
            "Price": "60",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "All Star High Top",
            "Brand": "Converse",
            "Colorway": "Black, White",
            "Price": "65",
            "Status": "Owned",
            "Type": "Sneaker",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "All Star High Top",
            "Brand": "Converse",
            "Colorway": "White",
            "Price": "65",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "6",
            "Rating": "7"
        },
        {
            "Name": "Sk8 Hi",
            "Brand": "Vans",
            "Colorway": "Grey, White",
            "Price": "75",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "6"
        },
        {
            "Name": "Old Skool",
            "Brand": "Vans",
            "Colorway": "Black, White",
            "Price": "70",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "6"
        },
        {
            "Name": "Leather Cardi",
            "Brand": "Reebok",
            "Colorway": "Rose Gold",
            "Price": "75",
            "Status": "Want",
            "Type": "Walking",
            "Comfortability": "8",
            "Rating": "7"
        },
        {
            "Name": "Club C Cardi V2",
            "Brand": "Reebok",
            "Colorway": "Muted Blue",
            "Price": "120",
            "Status": "Want",
            "Type": "Walking",
            "Comfortability": "8",
            "Rating": "9"
        },
        {
            "Name": "Club C 85",
            "Brand": "Reebok",
            "Colorway": "White, Navy",
            "Price": "75",
            "Status": "Owned",
            "Type": "Tennis",
            "Comfortability": "6",
            "Rating": "6"
        },
        {
            "Name": "MB.01",
            "Brand": "PUMA",
            "Colorway": "White",
            "Price": "95",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "8",
            "Rating": "6"
        },
        {
            "Name": "Slipstream",
            "Brand": "PUMA",
            "Colorway": "White, Black",
            "Price": "65",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "7",
            "Rating": "8"
        },
        {
            "Name": "Retro 5 SE",
            "Brand": "Jordan",
            "Colorway": "Burgundy, Silver",
            "Price": "150",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "5",
            "Rating": "7"
        },
        {
            "Name": "MVP",
            "Brand": "Jordan",
            "Colorway": "White, Red, Orange",
            "Price": "130",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "550",
            "Brand": "New Balance",
            "Colorway": "White, Green",
            "Price": "90",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "8"
        },
        {
            "Name": "Tatum 1",
            "Brand": "Jordan",
            "Colorway": "White, Blue, Red",
            "Price": "90",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "7"
        },
        {
            "Name": "Zoom Hyperace 2",
            "Brand": "Nike",
            "Colorway": "White, Black",
            "Price": "120",
            "Status": "Owned",
            "Type": "Volleyball",
            "Comfortability": "8",
            "Rating": "6"
        },
        {
            "Name": "Pegasus",
            "Brand": "Nike",
            "Colorway": "Black, White",
            "Price": "100",
            "Status": "Want",
            "Type": "Running",
            "Comfortability": "10",
            "Rating": "7"
        },
        {
            "Name": "Dunk Low",
            "Brand": "Nike",
            "Colorway": "Black, Silver",
            "Price": "100",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "8"
        },
        {
            "Name": "Cloudmonster",
            "Brand": "On",
            "Colorway": "White, Black",
            "Price": "170",
            "Status": "Want",
            "Type": "Running",
            "Comfortability": "10",
            "Rating": "7"
        },
        {
            "Name": "Next Nature Dunk Low",
            "Brand": "Nike",
            "Colorway": "White, Brown",
            "Price": "115",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "6",
            "Rating": "7"
        },
        {
            "Name": "Samoa",
            "Brand": "Adidas",
            "Colorway": "Black, White",
            "Price": "70",
            "Status": "Want",
            "Type": "Soccer",
            "Comfortability": "8",
            "Rating": "8"
        },
        {
            "Name": "Air Max 97",
            "Brand": "Nike",
            "Colorway": "Black",
            "Price": "160",
            "Status": "Want",
            "Type": "Running",
            "Comfortability": "9",
            "Rating": "6"
        },
        {
            "Name": "GEL-1130",
            "Brand": "Asics",
            "Colorway": "Tan, White",
            "Price": "100",
            "Status": "Want",
            "Type": "Running",
            "Comfortability": "10",
            "Rating": "9"
        },
        {
            "Name": "Air Max 90 Futura",
            "Brand": "Nike",
            "Colorway": "White, Grey, Brown",
            "Price": "160",
            "Status": "Want",
            "Type": "Running",
            "Comfortability": "8",
            "Rating": "9"
        },
        {
            "Name": "Campus 00's",
            "Brand": "Adidas",
            "Colorway": "White, Black",
            "Price": "110",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "8",
            "Rating": "8"
        },
        {
            "Name": "Gamma Force",
            "Brand": "Nike",
            "Colorway": "White, Blue",
            "Price": "95",
            "Status": "Want",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "9"
        },
        {
            "Name": "Photon Dust Uptempo",
            "Brand": "Nike",
            "Colorway": "Grey, White, Black",
            "Price": "110",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "7",
            "Rating": "8"
        },
        {
            "Name": "Cortez",
            "Brand": "Nike",
            "Colorway": "White, Black",
            "Price": "65",
            "Status": "Owned",
            "Type": "Running",
            "Comfortability": "8",
            "Rating": "9"
        },
        {
            "Name": "XXXVII Pure Money",
            "Brand": "Jordan",
            "Colorway": "White, Metallic",
            "Price": "110",
            "Status": "Owned",
            "Type": "Basketball",
            "Comfortability": "8",
            "Rating": "8"
        },
        {
            "Name": "Lowland ComfyCush Varsity",
            "Brand": "Vans",
            "Colorway": "White, Light Blue",
            "Price": "95",
            "Status": "Want",
            "Type": "Skate",
            "Comfortability": "8",
            "Rating": "9"
        },
        {
            "Name": "Cons AS-1 Pro",
            "Brand": "Converse",
            "Colorway": "Black, White",
            "Price": "80",
            "Status": "Owned",
            "Type": "Skate",
            "Comfortability": "8",
            "Rating": "9"
        },
    ];

    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={shoeData} />);
})();
