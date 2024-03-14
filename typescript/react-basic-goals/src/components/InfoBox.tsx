import { type ReactNode } from "react"

type IndoBoxProps = {
  mode: 'hint' | 'warning',
  children: ReactNode,

}

//Box for only info, with warning
export default function InfoBox({mode, children}: IndoBoxProps) { 
 if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>WARNING!!!</h2>
      <p>{children}</p>
    </aside>
  );
}