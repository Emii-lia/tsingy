import {Navbar} from "@/_components/navigation/Navbar";
import logo from "../../../../public/lemur-origami.png";
import {navLinks} from "@/_constant/nav.links";
import LanguageChanger from "@/_components/form/combo/LanguageChanger";
import React from "react";
import "../globals.css"

export default function Layout(
    {
        children,
        about,
        event,
        nature,
        wonder,
        activity,
        contact,
        feedback,
    }: Readonly<{
      children: React.ReactNode;
      about: React.ReactNode;
      event: React.ReactNode;
      wonder: React.ReactNode;
      nature: React.ReactNode;
      activity: React.ReactNode;
      contact: React.ReactNode;
      feedback: React.ReactNode;
    }>
){
    return(
      <div className={"flex flex-col"}>
          <div>
              <Navbar logo={logo.src} name="Tsingy" navLinks={navLinks}>
                  <LanguageChanger/>
              </Navbar>
          </div>
          <div className={"flex flex-col gap-40 max-md:gap-28"}>
              {children}
              <div className={"flex flex-col gap-24 max-md:gap-16 overflow-x-hidden max-sm:gap-24"}>
                  {about}
                  {event}
                  {nature}
                  {wonder}
                  {activity}
                  {contact}
                  {feedback}
              </div>
          </div>
      </div>
    )
}