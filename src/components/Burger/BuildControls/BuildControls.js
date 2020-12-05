import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label:'Bacon',type:'bacon'},
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]

const data = controls.map(control=>(
    <BuildControl key={control.label} label={control.label}/>
))

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        {data}
    </div>
);

export default buildControls;