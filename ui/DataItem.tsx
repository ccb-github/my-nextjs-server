'use client';

import { useEffect, useRef } from "react";
import { ajaxSearch } from "#/lib/demos";
type propType = "double" | "int"

export default function DataItem({ dataItem, index, id }: {dataItem: any, index: number,id: any}){
	const type = useRef("")
	useEffect( () => {
	  console.log({dataItem})
	})
	function updateClick(e: { preventDefault: () => void; target: any; }){
		e.preventDefault()
		
		const eTarget = e.target

		// $(e.target.parentNode.parentNode).find('td.value-cell')
		// 		.attr('contenteditable', 'true').each(
		// 			(_index: number, element)=>{
		// 				$(element).addClass('table-active')
		// 				valueBefore[element.id] = element.innerText
		// 			}
		// 		);
		// console.log(`valueBefore: ${JSON.stringify(valueBefore)}`)

		$(e.target).removeClass('update-link')
		$(e.target).addClass('submit-link')
		
		e.target.innerHTML = "Submit"  
		$(eTarget).off("click") 
		$(eTarget).on("click", submitClick)
  
	}
	
	function submitClick( e ) {
		e.preventDefault()
		const eTarget = e.target
		
		// $(e.target.parentNode.parentNode).find('td.value-cell')
		// 	.attr('contenteditable', 'false').each(
		// 		(index, element)=>{
		// 			$(element).removeClass('table-active')
		// 			valueAfter[element.id] = element.innerText
		// 		}
		// 	)
		// console.log(`valueAfter: ${JSON.stringify(valueAfter)}`)
		
		// ajaxSearch(eTarget.href, {
		// 	before: JSON.stringify(valueBefore),
		// 	after: JSON.stringify(valueAfter)
		// }, alert)

		$(e.target).removeClass('submit-link')
		$(e.target).addClass('update-link')

		e.target.innerHTML = "Update"
		$(eTarget).off("click")
		$(eTarget).on("click", updateClick)       
	}
	
	function deleteClick( link: string, {}, cb = () => {}) {
		ajaxSearch(link, {}, cb)	
	}

	return (
    <tr>
      <th scope="row">{index + 1}</th>
      {Object.keys(dataItem).map((dataItemKey) => (
        <td className="value-cell" key={dataItemKey}>
          {JSON.stringify(dataItem[dataItemKey])}
        </td>
      ))}
      <td>
        <a
          className="update-link"
          onClick={updateClick}
          href={`#`}
        >
          Update
        </a>
        <a className="delete-link" href={`../delete/${type.current}/${id}`}>
          Delete
        </a>
      </td>
    </tr>
  );
}
