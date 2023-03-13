import { schemaJson } from '#/lib/demos';
import AddDataForm from '#/ui/AddDataForm'

export default function Page() { 

	return (
	  <div>
		<AddDataForm schemaObj={schemaJson['Enterprise']}/>
		
	  </div>
	);
  }