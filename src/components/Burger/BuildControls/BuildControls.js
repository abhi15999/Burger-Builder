import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label:'Bacon',type:'bacon'},
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]


const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price}</strong></p>
        {controls.map(control=>(
    <BuildControl 
     added={()=>props.ingredientAdded(control.type)}
     removed={()=>props.ingredientRemoved(control.type)}
     key={control.label} 
     label={control.label}
     disabled={props.disabled[control.type]}/>
))}
<button className={classes.OrderButton} disabled={!props.purchase}>
    ORDER NOW
</button>
    </div>
);




export default buildControls;