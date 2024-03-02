import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts"  id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}