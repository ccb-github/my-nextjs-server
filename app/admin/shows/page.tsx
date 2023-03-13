/* eslint-disable react/jsx-key */
import React from "react";

export default function Page({ data, type}) {
	
	return (
		<table className="table"> 
          <tr>
            <th>#</th>
            <th>action</th>  
          </tr>
			{
				data.map((item, index) =>
					<tr>
						<th scope="row">{index + 1}</th>
						{
							Object.keys(item).map((prop, index) =>
								<td id="<%- item %>" className="value-cell">
									item
								</td>
							)
						}
						<td>
							<a className="update-link" href={`../update/${type}`}>Update</a>
							<a className="delete-link" href={`../delete/id`}>Delete</a>
						</td>
					</tr>
				)
			}     
          
        
        <tfoot>
          <tr>
            <th> 
            <a href="/users/insert/<%= type %>">Insert new one</a>
            </th>
        </tr>
        </tfoot>
      </table>

	)
}