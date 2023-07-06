(ns ariel-reis)

(def podcast-data {:host-name "Matheus Trindade" 
                   :guest-name "Ariel Reis"
                   :date "5 de julho de 2023"})

(defn print-data
  "Isto vai printar os dados deste podcast"
  []
  (let [{:keys [host-name guest-name date]} podcast-data
        formatted-str (format 
                       "Obrigado, %s! Você entrevistou o %s no dia %s."
                       host-name guest-name date)]
    (println formatted-str)))
