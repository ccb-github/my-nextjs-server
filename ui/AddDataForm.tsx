'use client';
import Script from 'next/script';
import React, { useEffect } from 'react';
import type { SchemaObject, SchemaProps } from 'types/schema';

function templateHtml(prop: SchemaProps) {
	var DATE_FORMAT = 'YYYY-MM-DD HH:MM:SS';
	const DOUBLE_PRECISION = 0.0001
	if (prop.type === 'objectId' || prop.name === '_partition') {
	  return null;
	}
	else if (prop.type === 'int')
	  return (
		<div className="form-group">
		  <label className="col-md-8 control-label" htmlFor={prop.name}> 
			{prop.name}  
		  </label>  
		  <div className="col-md-8">
			<input id="prop.name" name="prop.name" type="number"   className="form-control input-md"/>  
		  </div>
		</div>
	)
	else if (prop.type === 'double')
	  return (
		<div className="form-group">  
		  <label className="col-md-8 control-label" htmlFor={prop.name}>{prop.name}</label>  
		  <div className="col-md-8">
		    <input id={prop.name}  name={prop.name} type="number" step={DOUBLE_PRECISION} required={prop.optional} 
			       placeholder={`please Enter your ${prop.name} here, presion up to ${DOUBLE_PRECISION}`} 
				   className="form-control input-md"/>
		  </div>
		</div>);
	else if (prop.type === 'date') {
	  return (
	    <div className="form-group">
			<label className="col-md-8 control-label" htmlFor="prop.name">{prop.name}</label>
		    <div className="col-md-8">  
			  <input id={prop.name}  name={prop.name} type="text"  placeholder={`please Enter your ${prop.name}, fromat: ${DATE_FORMAT} here`}
			         className="form-control input-md" required={prop.optional}/>
			</div>  
		</div>)
	}
	else if (prop.type === 'string') {
		return (
		  <div className="form-group">  
		    <label className="col-md-8 control-label" htmlFor={prop.name}>{prop.name}</label>  
			<div className="col-md-8">
			  <input id={prop.name} name={prop.name} type="text"   
			     placeholder={`please Enter your ${prop.name} here`}   className="form-control input-md" required={!prop.optional}/>  
			</div>
		  </div> 
		)
	}
	else if (prop.type === 'object' && prop.objectType === 'Location') {
	  console.log("Embed field Loation " + JSON.stringify(prop));
	  return (
		<div className="form-group">   
	      <label className="col-md-8 control-label" htmlFor={prop.name}>{prop.name} </label>   
		  <div className="col-md-8"> 
			<label className="control-label" htmlFor={`${prop.name}Longitude`}>{`${prop.name}.longitude`}</label> 
			<input id={`${prop.name}_Longitude`} name={prop.name}  type="text" 
					placeholder={`please Enter your ${prop.name}.longtitude here, Location content, required=${prop.optional}`}/> 
			<label className="control-label" htmlFor={`${prop.name}` + "_Latitude"}> {`{$prop.name}.latitude`} </label> 
			<input id={`${prop.name}_Latitude`} name={`${prop.name}`} type="text" placeholder={`please Enter your ${prop.name} latitude here, Location content,    required=" + prop.optional `}/>   
		  </div>
		</div>
	  )
	}
	// onclick="this.focus();this.select();"  
	else if (prop.type === 'object' && prop.objectType === 'Qrcode') {
	  return (
		<div className="form-group">  
	      <label className="col-md-8 control-label" htmlFor={`${prop.name}`} >{prop.name}</label>  
		  <div className="col-md-8"><input id={prop.name} name={prop.name} type="textarea"  
		       placeholder={`please Enter your ${prop.name} here,generate qrcode base on the content entered   ${prop.optional ? "" : "required"}`}/> </div>  
		  <div id="qrcode" title="Preview of your qrcode"></div>
		</div>
	  );
	}
	else {
	  return (
	    <div className="form-group">  
		  <label className="col-md-8 control-label" htmlFor={`${prop.name}`}>{prop.name} </label>  
		  <div className="col-md-8">  
		    <input id="prop.name" name=" + prop.name + " type="text"   placeholder={`please Enter your ${prop.name} here`}   className="form-control input-md" 
			       required={!prop.optional}/>  
		  </div>
		</div>
	  );
	}
  };
export default function AddDataForm({
  schemaObj
}: {
  schemaObj: SchemaObject;
}) {
  useEffect( () => {
	console.log("Reason",{schemaObj})
  })
  
  const submitForm = () => {

  }
  return (
    <>
      <form method="post" action="#" id="insertForm" 
	        onSubmit={submitForm} className="pt-2 bg-vercel-cyan"
	  >
        {Object.keys(schemaObj.properties).map((e) =>
          templateHtml(schemaObj.properties[e]),
        )}
      </form>
      <Script id="insert-form">{`
	    const schemaJson = '<%- JSON.stringify(schema) %>'
		const type = '<%= type %>'
		var insertData = {}
			
		//$('#typeSwitch').change(changeType)
		$('#insertForm').on("submit", insertForm)
			
				function changeType(e) {
					const schemaArray = JSON.parse(schemaJson)
					const schema = schemaArray.find( element => element.name === e.target.value)
					function helpText() {
			
					}
					//We need "" to make this work
					//TODO constraint
				  
				   
					
					/*log the into*/
					console.log(Object.entries(schema.properties)
						   .map(prop => templateHTML(prop[1])))
					
			
					$('#insertForm>.form-body').empty().append(
						Object.entries(schema.properties).map(prop => templateHTML(prop[1]))
					)
					$('#insertForm').attr('action', 'type')
					
				}
				
			   
			
				function insertForm(event) {
					event.preventDefault()
					
					const eSelf = event.target
			
					$(eSelf).serializeArray().forEach(
						(element, index) => {
							//TODO name and id, which is better
							insertData[element.name] = element.value
						}
					)
			
					ajaxSearch(eSelf.action, insertData, alert)
					}
				`}</Script>
    </>
  );
}
