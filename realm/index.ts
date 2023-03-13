import Realm from "realm"

//@ts-ignore
export const app = new Realm.App(process.env.NEXT_PUBLIC_APP_ID)

export async function openRealm(email: string, password: string) {
    // await app.logIn(new Realm.Credentials.emailPassword(email, password));
    // When you open a synced realm, the SDK automatically automatically
    // creates the realm on the device (if it didn't exist already) and
    // syncs pending remote changes as well as any unsynced changes made
    // to the realm on the device.
    await app.logIn(Realm.Credentials.emailPassword(email, password))
    //Dev only
    
    console.log(`Logged in with user id: ${app.currentUser?.id}`);
    //TODO should we introduce dynamic sub
    return await Realm.open({
        sync: {
            //@ts-ignore
            flexible: true,
            user: app.currentUser,
            initialSubscriptions: {
                update: (mutableSubs, realm: Realm) => {
                    mutableSubs.add(realm.objects("Regulatory"), {
                        name: "regulatorySubscription",
                        throwOnUpdate: true,
                    });
                      mutableSubs.add(realm.objects("Order"), {
                        name: "orderSubscription",
                        throwOnUpdate: true,
                      });
                      mutableSubs.add(realm.objects("Enterprise"), {
                        name: "enterpriseSubscription",
                        throwOnUpdate: true,
                      });
                      mutableSubs.add(realm.objects("Producer"), {
                        name: "producerSubscription",
                        throwOnUpdate: true,
                      });
                      mutableSubs.add(realm.objects("Product"), {
                        name: "productSubscription",
                        throwOnUpdate: true,
                      });
                      mutableSubs.add(realm.objects("Checker"), {
                        name: "checkerMainSubscription",
                        throwOnUpdate: true,
                      });
                },
            },
        },
		schemaVersion: 6
    });   
}

openRealm("admin@domain.com", "passowrd")