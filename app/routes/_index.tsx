/**
 * @openformation/remix-app-template
 *
 * Copyright, 2023 - Open Formation GmbH, Hamburg, Germany
 *
 * All rights reserved
 */

/**
 * @author André König <andre.koenig@openformation.io>
 *
 */

import type { MetaFunction } from "@remix-run/node";

import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Open Formation Remix App" }];
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-extrabold text-8xl">Welcome!</h1>
      <h2 className="font-bold text-2xl">To your new App</h2>

      <Link
        to="https://openformation.io"
        className="fixed bottom-8 underline text-blue-500 text-sm"
      >
        Open Formation GmbH
      </Link>
    </div>
  );
}
