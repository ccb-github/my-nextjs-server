export async function getServerSideProps(_context: unknown) {
	try {
	 
		const mongo = app?.currentUser?.mongoClient('mongodb-atlas');
		const recordsCollection = mongo.db('qrcodeTraceability').collection(type);
		recordsCollection.find(filter).then((foundRecords) => {
		  console.log(foundRecords.length);
		  setDatas(foundRecords);
		});
	} catch (e) {
	  console.error(e)
	  return {
		props: { isConnected: false },
	  }
	}
}