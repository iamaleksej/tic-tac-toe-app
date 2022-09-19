import React from "react";

const {
   Provider: AppServiceProvider,
   Consumer: AppServiceConsumer
} = React.createContext<any>(null);

export {
   AppServiceProvider,
   AppServiceConsumer
}