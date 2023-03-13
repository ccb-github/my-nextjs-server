'use client'
import { useEffect, useState } from "react";
import * as Realm from "realm-web";
export function useApp() {
  const [app, setApp] = useState<Realm.App>();
  // Run in useEffect so that App is not created in server-side environment
  useEffect(() => {
    setApp(Realm.getApp(process.env.NEXT_PUBLIC_APP_ID? process.env.NEXT_PUBLIC_APP_ID : "FALLBACK"));
  }, []);
  return app;
}