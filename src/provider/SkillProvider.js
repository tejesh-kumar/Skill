import React, { useState, useEffect } from 'react';

export const SkillContext = React.createContext();

const SkillProvider = (props) => {
	const [ modalOpen, setModalOpen ] = useState(false);
	const [ currentEditSkill, setCurrentEditSkill ] = useState({
		id: '',
		levelCode: '',
		levelName: '',
		skillLevel: '',
		active: false
	});
	const [ skillList, setSkillList ] = useState([]);

	useEffect(() => {
		const tempSkillList = JSON.parse(localStorage.getItem('skillList'));
		if (tempSkillList) {
			setSkillList(tempSkillList);
		} else {
			setSkillList([]);
		}
	}, []);

	const handleModalOpen = (param) => {
		if (param === false) {
			setModalOpen(false);
		} else {
			setModalOpen(true);
		}
	};

	const handleAddNewSkill = (newSkill) => {
		const randId = Math.floor(Math.random() * 68385945);
		newSkill.id = randId;

		console.log(newSkill);

		const tempSkillList = [ ...skillList ];
		tempSkillList.push(newSkill);
		localStorage.setItem('skillList', JSON.stringify(tempSkillList));
		setSkillList(tempSkillList);
	};

	const handleCurrentSkillChange = (tempCurrentSkill) => {
		console.log(tempCurrentSkill, 'tempCurrentSkill');
	};

	useEffect(
		() => {
			if (modalOpen === false) {
				setCurrentEditSkill({
					id: '',
					levelCode: '',
					levelName: '',
					skillLevel: '',
					active: false
				});
			}
		},
		[ modalOpen ]
	);

	return (
		<SkillContext.Provider
			value={{
				modalOpen,
				handleModalOpen,
				skillList,
				currentEditSkill,
				setSkillList,
				handleAddNewSkill,
				setCurrentEditSkill,
				handleCurrentSkillChange
			}}
		>
			{props.children}
		</SkillContext.Provider>
	);
};

export default SkillProvider;
