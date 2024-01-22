import styles from "./SummaryResponses.module.scss"

function SummaryResponses() {
  return (
    <div className={styles.form_responses_summary}>
      <h3>Frågan: (tex: Vilken är din favorit färg?)</h3>
      <p>7 Svar (visa antalet svar.)</p>
      <ul>
        <li>röd (svar 1)</li>
        <li>grön (svar 2)</li>
        <li>orange (svar 3)</li>
        <li>röd (svar 4)</li>
      </ul>
    </div>
  )
}

export default SummaryResponses
