import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import banner from '../../img/banner11.jpg';
import doc from '../../img/doc2.jpg';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import styles from '../../assets/jss/material-dashboard-react/components/dashboardStyle.js';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../App.css';
const useStyles = makeStyles(styles);
const languages = [
	{ name: 'Itching' },
	{ name: 'Skin Rash' },
	{ name: 'Nodal Skin Erruption' },
	{ name: 'Shivering' },
	{ name: 'Chills' },
	{ name: 'Joint Pain' },
	{ name: 'Stomach Pain' },
	{ name: 'Acidity' },
	{ name: 'Ulcers on tongue' },
	{ name: 'Muscle Weakening' },
	{ name: 'Vomiting' },
	{ name: 'Burning Micturition' },
	{ name: 'Spotting Urination' },
	{ name: 'Fatigue' },
	{ name: 'Weight Gain' },
	{ name: 'Anxiety' },
	{ name: 'Cold hands and feets' },
	{ name: 'Mood Swings' },
	{ name: 'Weight Loss' },
	{ name: 'Restlessness' },
	{ name: 'Lethargy' },
	{ name: 'Patches in throat' },
	{ name: 'Irregular sugar level' },
	{ name: 'Cough' },
	{ name: 'High fever' },
	{ name: 'Sunken eyes' },
	{ name: 'Breathlessness' },
	{ name: 'Sweating' },
	{ name: 'Dehydration' },
	{ name: 'Indigestion' },
	{ name: 'Headache' },
	{ name: 'Yellowish skin' },
	{ name: 'Dark urine' },
	{ name: 'Nausea' },
	{ name: 'Loss of appetite' },
	{ name: 'Pain behind the eyes' },
	{ name: 'Back pain' },
	{ name: 'Constipation' },
	{ name: 'Abdominal pain' },
	{ name: 'Diarrhoea' },
	{ name: 'Mild fever' },
	{ name: 'Yellow urine' },
	{ name: 'Yellowing of eyes' },
	{ name: 'Acute liver failure' },
	{ name: 'Fluid overload' },
	{ name: 'Swelling of stomach' },
	{ name: 'Swelled lymph nodes' },
	{ name: 'Malaise' },
	{ name: 'Blurred and distorted vision' },
	{ name: 'Phlegm' },
	{ name: 'Throat irritation' },
	{ name: 'Redness of eyes' },
	{ name: 'Sinus pressure' },
	{ name: 'Runny nose' },
	{ name: 'Congestion' },
	{ name: 'Chest pain' },
	{ name: 'Weakness in limbs' },
	{ name: 'Fast heart rate' },
	{ name: 'Pain during bowel movements' },
	{ name: 'Pain in anal region' },
	{ name: 'Bloody stool' },
	{ name: 'Irritation in anus' },
	{ name: 'Neck pain' },
	{ name: 'Dizziness' },
	{ name: 'Cramps' },
	{ name: 'Bruising' },
	{ name: 'Obesity' },
	{ name: 'Swollen legs' },
	{ name: 'Swollen blood vessels' },
	{ name: 'Puffy face and eyes' },
	{ name: 'Enlarged thyroid' },
	{ name: 'Brittle nails' },
	{ name: 'Swollen extremeties' },
	{ name: 'Excessive hunger' },
	{ name: 'Drying and tingling lips' },
	{ name: 'Slurred speech' },
	{ name: 'Knee pain' },
	{ name: 'Hip joint pain' },
	{ name: 'Muscle weakness' },
	{ name: 'Stiff neck' },
	{ name: 'Swelling joints' },
	{ name: 'Movement stiffness' },
	{ name: 'Spinning movements' },
	{ name: 'Loss of balance' },
	{ name: 'Unsteadiness' },
	{ name: 'Weakness of one body side' },
	{ name: 'Loss of smell' },
	{ name: 'Bladder discomfort' },
	{ name: 'Foul smell of urine' },
	{ name: 'Continuous feel of urine' },
	{ name: 'Passage of gases' },
	{ name: 'Internal itching' },
	{ name: 'Toxic look (typhos)' },
	{ name: 'Depression' },
	{ name: 'Irritability' },
	{ name: 'Muscle pain' },
	{ name: 'Altered sensorium' },
	{ name: 'Red spots over body' },
	{ name: 'Belly pain' },
	{ name: 'Abnormal menstruation' },
	{ name: 'Dischromic patches' },
	{ name: 'Watering from eyes' },
	{ name: 'Increased appetite' },
	{ name: 'Polyuria' },
	{ name: 'Family history' },
	{ name: 'Mucoid sputum' },
	{ name: 'Rusty sputum' },
	{ name: 'Lack of concentration' },
	{ name: 'Visual disturbances' },
	{ name: 'Receiving blood transfusion' },
	{ name: 'Receiving unsterile injections' },
	{ name: 'Coma' },
	{ name: 'Stomach bleeding' },
	{ name: 'Distention of abdomen' },
	{ name: 'History of alcohol consumption' },
	{ name: 'Fluid overload' },
	{ name: 'Blood in sputum' },
	{ name: 'Prominent veins on calf' },
	{ name: 'Palpitations' },
	{ name: 'Painful walking' },
	{ name: 'Pus filled pimples' },
	{ name: 'Blackheads' },
	{ name: 'Scurring' },
	{ name: 'Skin peeling' },
	{ name: 'Silver like dusting' },
	{ name: 'Small dents in nails' },
	{ name: 'Inflammatory nails' },
	{ name: 'Blister' },
	{ name: 'Red sore around nose' },
	{ name: 'Yellow crust ooze' },
	{ name: 'Prognosis' },
];
const getSuggestions = (value) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0
		? []
		: languages.filter(
				(lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
		  );
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

class Disease extends Component {
	constructor(props) {
		super(props);

		this.state = {
			symptomArray: [],
			symptomCopyArray: [],
			value: '',
			suggestions: [],
			mydata: null,
			second: null,
			third: null,
			symptoms: [],
			firstaidDisease: '',
			percentage: '',
			checkDisease: '',
			check: '',
			percentage1: '',
			percentage2: '',
			percentage3: '',
		};
	}
	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue,
		});
	};

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
		});
	};

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};

	submit = async () => {
		await this.allSymptoms();

		fetch('http://localhost:1000/api/Disease', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				symptoms: this.state.symptomArray,
			}),
		})
			.then(async (data) => {
				console.log(data);
				var data = await this.callBackendAPI();
				console.log(data);
				this.setState({
					mydata: data.express[0],
					second: data.express[1],
					third: data.express[2],
					percentage: data.express[4],
					checkDisease: data.express[5],
					percentage1: data.express[6],
					percentage2: data.express[7],
					percentage3: data.express[8],
				});
				console.log(this.state.percentage);
				var x = '';

				console.log(this.state.firstaidDisease);
			})
			.catch((err) => alert(err));
	};

	originalSymptom(name) {
		var symptom = '';
		if (name == 'Itching') {
			symptom = 'itching';
		} else if (name == 'Skin Rash') {
			symptom = 'skin_rash';
		} else if (name == 'Nodal Skin Erruption') {
			symptom = 'nodal_skin_eruptions';
		} else if (name == 'Shivering') {
			symptom = 'shivering';
		} else if (name == 'Chills') {
			symptom = 'chills';
		} else if (name == 'Joint Pain') {
			symptom = 'joint_pain';
		} else if (name == 'Stomach Pain') {
			symptom = 'stomach_pain';
		} else if (name == 'Acidity') {
			symptom = 'acidity';
		} else if (name == 'Ulcers on tongue') {
			symptom = 'ulcers_on_tongue';
		} else if (name == 'Muscle Weakening') {
			symptom = 'muscle_wasting';
		} else if (name == 'Vomiting') {
			symptom = 'vomiting';
		} else if (name == 'Burning Micturition') {
			symptom = 'burning_micturition';
		} else if (name == 'Spotting Urination') {
			symptom = 'spotting_ urination';
		} else if (name == 'Fatigue') {
			symptom = 'fatigue';
		} else if (name == 'Weight Gain') {
			symptom = 'weight_gain';
		} else if (name == 'Anxiety') {
			symptom = 'anxiety';
		} else if (name == 'Cold hands and feets') {
			symptom = 'cold_hands_and_feets';
		} else if (name == 'Mood Swings') {
			symptom = 'mood_swings';
		} else if (name == 'Weight Loss') {
			symptom = 'weight_loss';
		} else if (name == 'Restlessness') {
			symptom = 'restlessness';
		} else if (name == 'Lethargy') {
			symptom = 'lethargy';
		} else if (name == 'Patches in throat') {
			symptom = 'patches_in_throat';
		} else if (name == 'Irregular sugar level') {
			symptom = 'irregular_sugar_level';
		} else if (name == 'Cough') {
			symptom = 'cough';
		} else if (name == 'High fever') {
			symptom = 'high_fever';
		} else if (name == 'Sunken eyes') {
			symptom = 'sunken_eyes';
		} else if (name == 'Breathlessness') {
			symptom = 'breathlessness';
		} else if (name == 'Sweating') {
			symptom = 'sweating';
		} else if (name == 'Dehydration') {
			symptom = 'dehydration';
		} else if (name == 'Indigestion') {
			symptom = 'indigestion';
		} else if (name == 'Headache') {
			symptom = 'headache';
		} else if (name == 'Yellowish skin') {
			symptom = 'yellowish_skin';
		} else if (name == 'Dark urine') {
			symptom = 'dark_urine';
		} else if (name == 'Nausea') {
			symptom = 'nausea';
		} else if (name == 'Loss of appetite') {
			symptom = 'loss_of_appetite';
		} else if (name == 'Pain behind the eyes') {
			symptom = 'pain_behind_the_eyes';
		} else if (name == 'Back pain') {
			symptom = 'back_pain';
		} else if (name == 'Constipation  ') {
			symptom = 'constipation';
		} else if (name == 'Abdominal pain') {
			symptom = 'abdominal_pain';
		} else if (name == 'Diarrhoea') {
			symptom = 'diarrhoea';
		} else if (name == 'Mild fever') {
			symptom = 'mild_fever';
		} else if (name == 'Yellow urine') {
			symptom = 'yellow_urine';
		} else if (name == 'Yellowing of eyes') {
			symptom = 'yellowing_of_eyes';
		} else if (name == 'Acute liver failure') {
			symptom = 'acute_liver_failure';
		} else if (name == 'Fluid overload') {
			symptom = 'fluid_overload';
		} else if (name == 'Swelling of stomach') {
			symptom = 'swelling_of_stomach';
		} else if (name == 'Swelled lymph nodes') {
			symptom = 'swelled_lymph_nodes';
		} else if (name == 'Malaise') {
			symptom = 'malaise';
		} else if (name == 'Blurred and distorted vision') {
			symptom = 'blurred_and_distorted_vision';
		} else if (name == 'Phlegm') {
			symptom = 'phlegm';
		} else if (name == 'Throat irritation') {
			symptom = 'throat_irritation';
		} else if (name == 'Redness of eyes') {
			symptom = 'redness_of_eyes';
		} else if (name == 'Sinus pressure') {
			symptom = 'sinus_pressure';
		} else if (name == 'Runny nose') {
			symptom = 'runny_nose';
		} else if (name == 'Congestion') {
			symptom = 'congestion';
		} else if (name == 'Chest pain') {
			symptom = 'chest_pain';
		} else if (name == 'Weakness in limbs') {
			symptom = 'weakness_in_limbs';
		} else if (name == 'Fast heart rate') {
			symptom = 'fast_heart_rate';
		} else if (name == 'Pain during bowel movements') {
			symptom = 'pain_during_bowel_movements';
		} else if (name == 'Pain in anal region') {
			symptom = 'pain_in_anal_region';
		} else if (name == 'Bloody stool') {
			symptom = 'bloody_stool';
		} else if (name == 'Irritation in anus') {
			symptom = 'irritation_in_anus';
		} else if (name == 'Neck pain') {
			symptom = 'neck_pain';
		} else if (name == 'Dizziness') {
			symptom = 'dizziness';
		} else if (name == 'Cramps') {
			symptom = 'cramps';
		} else if (name == 'Bruising') {
			symptom = 'bruising';
		} else if (name == 'Obesity') {
			symptom = 'obesity';
		} else if (name == 'Swollen legs') {
			symptom = 'swollen_legs';
		} else if (name == 'Swollen blood vessels') {
			symptom = 'swollen_blood_vessels';
		} else if (name == 'Puffy face and eyes') {
			symptom = 'puffy_face_and_eyes';
		} else if (name == 'Enlarged thyroid') {
			symptom = 'enlarged_thyroid';
		} else if (name == 'Brittle nails') {
			symptom = 'brittle_nails';
		} else if (name == 'Swollen extremeties') {
			symptom = 'swollen_extremeties';
		} else if (name == 'Excessive hunger') {
			symptom = 'excessive_hunger';
		} else if (name == 'Drying and tingling lips') {
			symptom = 'drying_and_tingling_lips';
		} else if (name == 'Slurred speech') {
			symptom = 'slurred_speech';
		} else if (name == 'Knee pain') {
			symptom = 'knee_pain';
		} else if (name == 'Hip joint pain') {
			symptom = 'hip_joint_pain';
		} else if (name == 'Muscle weakness') {
			symptom = 'muscle_weakness';
		} else if (name == 'Stiff neck') {
			symptom = 'stiff_neck';
		} else if (name == 'Swelling joints') {
			symptom = 'swelling_joints';
		} else if (name == 'Movement stiffness') {
			symptom = 'movement_stiffness';
		} else if (name == 'Spinning movements') {
			symptom = 'spinning_movements';
		} else if (name == 'Loss of balance') {
			symptom = 'loss_of_balance';
		} else if (name == 'Unsteadiness') {
			symptom = 'unsteadiness';
		} else if (name == 'Weakness of one body side') {
			symptom = 'weakness_of_one_body_side';
		} else if (name == 'Loss of smell') {
			symptom = 'loss_of_smell';
		} else if (name == 'Bladder discomfort') {
			symptom = 'bladder_discomfort';
		} else if (name == 'Foul smell of urine') {
			symptom = 'foul_smell_of urine';
		} else if (name == 'Continuous feel of urine') {
			symptom = 'continuous_feel_of_urine';
		} else if (name == 'Passage of gases') {
			symptom = 'passage_of_gases';
		} else if (name == 'Internal itching') {
			symptom = 'internal_itching';
		} else if (name == 'Toxic look (typhos)') {
			symptom = 'toxic_look_(typhos)';
		} else if (name == 'Depression') {
			symptom = 'depression';
		} else if (name == 'Irritability') {
			symptom = 'irritability';
		} else if (name == 'Muscle pain') {
			symptom = 'muscle_pain';
		} else if (name == 'Altered sensorium') {
			symptom = 'altered_sensorium';
		} else if (name == 'Red spots over body') {
			symptom = 'red_spots_over_body';
		} else if (name == 'Belly pain') {
			symptom = 'belly_pain';
		} else if (name == 'Abnormal menstruation') {
			symptom = 'abnormal_menstruation';
		} else if (name == 'Dischromic patches') {
			symptom = 'dischromic _patches';
		} else if (name == 'Watering from eyes') {
			symptom = 'watering_from_eyes';
		} else if (name == 'Increased appetite') {
			symptom = 'increased_appetite';
		} else if (name == 'Polyuria') {
			symptom = 'polyuria';
		} else if (name == 'Family history') {
			symptom = 'family_history';
		} else if (name == 'Mucoid sputum') {
			symptom = 'mucoid_sputum';
		} else if (name == 'Rusty sputum') {
			symptom = 'rusty_sputum';
		} else if (name == 'Lack of concentration') {
			symptom = 'lack_of_concentration';
		} else if (name == 'Visual disturbances') {
			symptom = 'visual_disturbances';
		} else if (name == 'Receiving blood transfusion') {
			symptom = 'receiving_blood_transfusion';
		} else if (name == 'Receiving unsterile injections') {
			symptom = 'receiving_unsterile_injections';
		} else if (name == 'Coma') {
			symptom = 'coma';
		} else if (name == 'Stomach bleeding') {
			symptom = 'stomach_bleeding';
		} else if (name == 'Distention of abdomen') {
			symptom = 'distention_of_abdomen';
		} else if (name == 'History of alcohol consumption') {
			symptom = 'history_of_alcohol_consumption';
		} else if (name == 'Fluid overload') {
			symptom = 'fluid_overload';
		} else if (name == 'Blood in sputum') {
			symptom = 'blood_in_sputum';
		} else if (name == 'Prominent veins on calf') {
			symptom = 'prominent_veins_on_calf';
		} else if (name == 'Palpitations') {
			symptom = 'palpitations';
		} else if (name == 'Painful walking') {
			symptom = 'painful_walking';
		} else if (name == 'Pus filled pimples') {
			symptom = 'pus_filled_pimples';
		} else if (name == 'Blackheads') {
			symptom = 'blackheads';
		} else if (name == 'Scurring') {
			symptom = 'scurring';
		} else if (name == 'Skin peeling') {
			symptom = 'skin_peeling';
		} else if (name == 'Silver like dusting') {
			symptom = 'silver_like_dusting';
		} else if (name == 'Small dents in nails') {
			symptom = 'small_dents_in_nails';
		} else if (name == 'Inflammatory nails') {
			symptom = 'inflammatory_nails';
		} else if (name == 'Blister') {
			symptom = 'blister';
		} else if (name == 'Red sore around nose') {
			symptom = 'red_sore_around_nose';
		} else if (name == 'Yellow crust ooze') {
			symptom = 'yellow_crust_ooze';
		} else if (name == 'Prognosis') {
			symptom = 'prognosis';
		} else {
			symptom = 'Does not exist';
		}
		return symptom;
	}
	allSymptoms = () => {
		if (this.state.value != '') {
			var symptom = this.originalSymptom(this.state.value);
			if (this.state.symptomArray.includes(symptom)) {
				alert('This symptom is already inclcuded');
				this.setState({
					value: '',
				});
			} else if (symptom == 'Does not exist') {
				alert('Sorry! This symptom cannot be entered');
				this.setState({
					value: '',
				});
			} else {
				this.setState({
					symptomArray: this.state.symptomArray.concat(symptom),
					symptomCopyArray: this.state.symptomCopyArray.concat(
						this.state.value
					),
					value: '',
				});
			}
		}
	};

	state = {
		data: null,
	};

	callBackendAPI = async () => {
		const response = await fetch('http://localhost:1000/api/Disease');
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message);
		}

		return body;
	};
	checkFirstAid = () => {
		if (this.state.percentage1 >= 50) {
			this.setState({
				firstaidDisease: this.findAid(this.state.mydata),
			});
		} else if (this.state.percentage2 >= 50) {
			this.setState({
				firstaidDisease: this.findAid(this.state.second),
			});
		} else if (this.state.percentage3 >= 50) {
			this.setState({
				firstaidDisease: this.findAid(this.state.third),
			});
		} else {
			this.setState({
				firstaidDisease:
					'The chances for this disease is less than 50 % so we cannot recommend any first aid. You need to add more symptoms or see your dooctor if you are unsure.',
			});
		}
	};

	findAid(disease) {
		var x = '';
		if (disease == 'Fungal infection') {
			x =
				'Creams and lotions can be applied to superficial skin infections. Don’t pick at the infected area because this could cause another type of infection. Avoiding moisture can be helpful. The affected area should be kept clean and dry.';
		} else if (disease == 'Allergy') {
			x =
				'Apply hydrocortisone cream or calamine lotion. Cover the area with a bandage. If theres swelling, apply a cold compress to the area. Take an antihistamine to reduce itching, swelling, and hives.';
		} else if (disease == 'GERD') {
			x =
				'Try lifestyle modifications and over-the-counter medications. If you dont experience relief within a few weeks,  consult doctor.';
		} else if (disease == 'Chronic cholestasis') {
			x =
				'Taking a prescription drug called ursodiol (Actigall, Urso, Urso Forte), which helps to lower the level of bile in your blood. Consulting doctor is highly recommended.';
		} else if (disease == 'Drug Reaction') {
			x =
				'Try to keep the person calm, Help the person lie on their back. Raise their feet about 12 inches and cover them with a blanket. Turn them on their side if they’re vomiting or bleeding. Make sure their clothing is loose so they can breathe.';
		} else if (disease == 'Peptic ulcer diseae') {
			x =
				'use acetaminophen for over-the-counter pain relief. You should not use aspirin, ibuprofen, ketoprofen, or naproxen sodium.';
		} else if (disease == 'AIDS') {
			x = 'Consult doctor';
		} else if (disease == 'Diabetes') {
			x = 'Consult Doctor';
		} else if (disease == 'Gastroenteritis') {
			x =
				'Adequate rest is advised, Drink plenty of fluids to prevent dehydration, Gradually eat easy -to-digest food, Avoid diary products, Avoid eating if nauseated.';
		} else if (disease == 'Bronchial Asthma') {
			x =
				'Sit the person upright comfortably and loosen tight clothing. If the person has asthma medication, such as an inhaler, assist in using it. If the person doesn’t have an inhaler, use one from a first aid kit. Do not borrow someone else’s.';
		} else if (disease == 'Hypertension') {
			x = '';
		} else if (disease == 'Migraine') {
			x =
				'Have the person rest in a cool, dark room. Apply a cool compress or ice pack to the painful area. ibuprofen  for pain relief.';
		} else if (disease == 'Cervical spondylosis') {
			x =
				'Treatment of pain from spondylosis commonly includes anti-inflammatory medications, analgesics and muscle relaxants. Nonsteroidal anti-inflammatory medications, or NSAIDs, can be very effective in relieving back and neck pain from spondylosis';
		} else if (disease == 'Paralysis (brain hemorrhage)') {
			x =
				'Stay as calm as possible while waiting for emergency help. If you are caring for someone else having a stroke, make sure theyre in a safe, comfortable position. Preferably, this should be lying on one side with their head slightly raised and supported in case they vomit. Check to see if theyre breathing.';
		} else if (disease == 'Jaundice') {
			x =
				'Drink at least eight glasses of fluids per day, Consider adding milk thistle to your routine, Opt for fruits like papaya and mango, which are rich in digestive enzymes, Eat at least 2 1/2 cups of veggies and 2 cups of fruit per day';
		} else if (disease == 'Malaria') {
			x = 'Chloroquine (medication) is recommended for treatment of  malaria.';
		} else if (disease == 'Chicken pox') {
			x =
				'pat (not rub) the body dry. put calamine lotion on itchy areas (but not on the face, especially near the eyes, or on the genitals) use diphenhydramine for severe itching. give your child acetaminophen as needed to help relieve pain from the sores on the skin or in the mouth';
		} else if (disease == 'Dengue') {
			x =
				'use pain relievers with acetaminophen and avoid medicines with aspirin, which could worsen bleeding. You should also rest, drink plenty of fluids.';
		} else if (disease == 'Typhoid') {
			x =
				'use antibiotics such as ceftriaxone.  Other than antibiotics, it is important to rehydrate by drinking adequate water.';
		} else if (disease == 'hepatitis A') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis B') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis C') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis D') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis E') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Alcoholic hepatitis') {
			x =
				'Stop drinking alcohol. This is the most critical part of the treatment. It may reverse the disease if your alcoholic hepatitis is mild. Your doctor may recommend medications, therapy, and support groups to help prevent or treat any withdrawal symptoms';
		} else if (disease == 'Tuberculosis') {
			x =
				'If you have been diagnosed with active TB, be sure to: Complete the full course of your TB medications. Stay at home especially during the first two weeks of treatment. Cover your mouth with a tissue when you cough or sneeze, and wear a face mask when around people during the first few weeks of treatment.';
		} else if (disease == 'Common Cold') {
			x =
				'Stay in bed and rest. Keep hydrated. Drinking water, iced tea, or very diluted juice to replenish fluids lost through sweating. Stay cool. Remove extra layers of clothing and blankets, unless you have the chills.';
		} else if (disease == 'Pneumonia') {
			x =
				'Control your fever with aspirin, nonsteroidal anti-inflammatory drugs (NSAIDs, such as ibuprofen or naproxen), or acetaminophen. Drink plenty of fluids to help loosen secretions and bring up phlegm. Do not take cough medicines without first talking to your doctor.';
		} else if (disease == 'Heartattack') {
			x =
				'Try to keep the person calm, and have them sit or lie down. If the person is not allergic to aspirin, have them chew and swallow a baby aspirin. (It works faster when chewed and not swallowed whole.) If the person stops breathing, you or someone else whos qualified should perform CPR right away.';
		} else if (disease == 'Varicoseveins') {
			x =
				'put a clean cloth or dressing on to the bleeding area and put firm pressure on it, for at least 10 minutes. Call an ambulance if the bleeding is heavy, or does not quickly stop.';
		} else if (disease == 'Hypothyroidism') {
			x = 'It might be a serious case, consult doctor';
		} else if (disease == 'Hypoglycemia') {
			x =
				'If the person is unconscious place him or her on their side and check the airway, breathing and pulse. Seek medical help immediately. If the person is conscious, give a sugary drink like lemonade, orange juice or even a glass of water with at least 2 teaspoons of sugar in it.';
		} else if (disease == 'Osteoarthristis') {
			x =
				'Use hot and cold therapy. Long, warm showers or baths — especially in the morning — help ease stiffness in your joints. Use an electric blanket or moist heating pad at night to keep your joints loose. Cold treatments are best for relieving joint pain, swelling, and inflammation';
		} else if (disease == '(vertigo) Paroymsal  Positional Vertigo') {
			x =
				'Have the person lie down and rest. The person should avoid sudden changes in body position. Help the person avoid abrupt head movements, especially looking up. Help the person avoid falls. If they are nauseous or throwing up, have them lie down on their side.';
		} else if (disease == 'Acne') {
			x =
				'Drinking plenty of water will help flush the bacteria out of the urinary tract. One of the simplest home remedies for a UTI is to drink plenty of water. This helps to flush the bacteria out of the body. The recommendation is for an individual to drink six to eight 8-ounce glasses of water in a day.';
		} else if (disease == 'Arthritis') {
			x =
				'Use hot and cold therapy. Long, warm showers or baths — especially in the morning help ease stiffness in your joints. Use an electric blanket or moist heating pad at night to keep your joints loose. Cold treatments are best for relieving joint pain, swelling, and inflammation.';
		} else if (disease == 'Urinary tract infection') {
			x =
				'Drinking plenty of water will help flush the bacteria out of the urinary tract. One of the simplest home remedies for a UTI is to drink plenty of water. This helps to flush the bacteria out of the body. The recommendation is for an individual to drink six to eight 8-ounce glasses of water in a day.';
		} else if (disease == 'Psoriasis') {
			x =
				'Bath solutions, such as Dead Sea salts, oil, oilated oatmeal, or Epsom salts can help psoriasis by removing scales and easing itching. To try Dead Sea salts and other bath solutions, mix them in the bath as directed, then soak in the tub for about 15 minutes';
		} else if (disease == 'Impetigo') {
			x =
				'Gently wash the infected area with antibacterial soap. Soak the area for 15 to 20 minutes in warm soapy water. Then gently remove the crusts. Cover the sores with a gauze bandage to keep the infection from spreading and to prevent scratching.';
		}
		return x;
	}

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: 'Symptoms',
			value,
			onChange: this.onChange,
		};

		return (
			<div>
				<div className='container'>
					<img className='dishead' src={banner} />
				</div>

				<Container>
					<Row>
						<Col sm={8}>
							<Form>
								<Form.Row>
									<Form.Group as={Col} controlId='formGridEmail'>
										<Form.Label className='newtext'>
											<b>Enter Your Symptoms here :</b>
										</Form.Label>

										<Row>
											<Col sm={9}>
												<Autosuggest
													suggestions={suggestions}
													onSuggestionsFetchRequested={
														this.onSuggestionsFetchRequested
													}
													onSuggestionsClearRequested={
														this.onSuggestionsClearRequested
													}
													getSuggestionValue={getSuggestionValue}
													renderSuggestion={renderSuggestion}
													inputProps={inputProps}
												/>
											</Col>
											<Col>
												<Button
													variant='danger'
													style={{ width: '3em' }}
													onClick={async () => {
														await this.allSymptoms();
														inputProps.placeholder = 'Add new Symptom';
													}}
												>
													<i class='fas fa-plus'></i>
												</Button>
											</Col>
										</Row>

										<Row>
											{this.state.symptomArray.map((i) => {
												return (
													<Row
														style={{ paddingTop: '1em', marginRight: '80px' }}
													>
														{/* <Row style={{ marginRight: '30px' }}> */}
														<div
															style={{
																backgroundColor: '#f4808d',
																color: 'white',
																width: '300px',
																textAlign: 'center',
															}}
														>
															<label style={{ padding: '5px' }}>
																<b>{i}</b>
															</label>
															<Button
																onClick={() => {
																	var array = [...this.state.symptomArray];
																	var index = array.indexOf(i);
																	if (index !== -1) {
																		array.splice(index, 1);
																		this.setState({ symptomArray: array });
																	}
																}}
																style={{
																	float: 'right',
																	height: '40px',
																	backgroundColor: '#ed5262',
																}}
															>
																<b>X</b>
															</Button>
														</div>
														{/* </Row> */}
													</Row>
												);
											})}
										</Row>
										<Col>
											<Button
												variant='danger'
												style={{ width: '12em', marginTop: '20px' }}
												onClick={async () => {
													await this.submit();

													this.setState({
														symptomArray: [],
														check: 'true',
														third: '',
													});
												}}
											>
												Check Disease
											</Button>
										</Col>
									</Form.Group>
								</Form.Row>

								<br />
								{this.state && !this.state.third && this.state.check && (
									<div className={useStyles.root}>
										<CircularProgress
											style={{
												width: '150px',
												height: '150px',
												alignItems: 'center',
												justifyContent: 'center',
												position: 'absolute',
												left: '40%',
												bottom: '40%',
												right: '40%',
												top: '40%',

												color: '#8d0000',
											}}
											// color='#8d0000'
										/>
									</div>
								)}
								{this.state && this.state.third && (
									<div>
										<Form.Row>
											<Form.Group as={Col} controlId='formGridEmail'>
												<Form.Label className='newtext'>
													<b>You are possibly having a following disease: </b>
												</Form.Label>
											</Form.Group>

											<Form.Group as={Col} controlId='formGridPassword'>
												<div class='disease'>
													<b>
														{this.state.mydata +
															' ' +
															this.state.percentage1 +
															' %'}
													</b>
												</div>
												<br />
												<div class='disease'>
													<b>
														{this.state.second +
															' ' +
															this.state.percentage2 +
															' %'}
													</b>
												</div>
												<br />
												<div class='disease'>
													<b>
														{this.state.third +
															' ' +
															this.state.percentage3 +
															' %'}
													</b>
												</div>
											</Form.Group>
										</Form.Row>
										<br />
										<Form.Row>
											<Form.Group as={Col} controlId='formGridEmail'>
												<Button
													variant='danger'
													style={{ width: '14em' }}
													onClick={this.checkFirstAid}
												>
													Check First Aid <i class='fas fa-first-aid'></i>
												</Button>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group
												as={Col}
												controlId='formGridEmail'
											></Form.Group>
											{this.state && this.state.firstaidDisease && (
												<Form.Group>
													<Form.Group as={Col} controlId='formGridEmail'>
														<Form.Label className='newtext'>
															<b>First Aid:</b>
														</Form.Label>
													</Form.Group>

													<Form.Group as={Col} controlId='formGridPassword'>
														<div class='disease'>
															{this.state.firstaidDisease}
														</div>
													</Form.Group>
												</Form.Group>
											)}
											<Form.Group
												as={Col}
												controlId='formGridEmail'
											></Form.Group>
										</Form.Row>
									</div>
								)}
							</Form>
						</Col>
						<Col sm={4}>
							<div class='flip-card'>
								<div class='flip-card-inner'>
									<div class='flip-card-front'>
										<img style={{ height: '30em' }} src={doc} />
									</div>
									<div class='flip-card-back'>
										<div className='newtext' style={{ margin: '2em' }}>
											<h1 className='guidehead'>
												<b>Guidelines:</b>
											</h1>

											<p>
												<i class='fas fa-arrow-circle-right'></i> Enter your
												symptom and click on add button.
											</p>
											<p>
												<i class='fas fa-arrow-circle-right'></i> You can add
												max of 3 symptoms
											</p>
											<p>
												<i class='fas fa-arrow-circle-right'></i> Diseases will
												be predicted probability wise.{' '}
											</p>
											<p>
												<i class='fas fa-arrow-circle-right'></i> Click on Check
												First Aid button and it'll show aid for the disease with
												highest probability{' '}
											</p>
											<center>
												<hr class='hrw' style={{ backgroundColor: 'white' }} />
											</center>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Disease;
