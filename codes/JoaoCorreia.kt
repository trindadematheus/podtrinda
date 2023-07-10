import java.time.LocalDate

data class Guest(
    val name: String,
    val headline: String,
    val signed: Boolean = false
) {
    fun sign() = copy(signed = true)
}

data class Episode(
    val host: String,
    val guest: Guest,
    val date: LocalDate
) {
    override fun toString(): String {
        return "Host: $host; Guest: ${guest.name}, Signed: ${if (guest.signed) "True" else "False"}; Date: $date"
    }
}

fun main() {
    val guest = Guest("João Correia", "Software Engineer at Mercado Libre").let { it.sign() }
    val episode = Episode("Matheus Trindade", guest, LocalDate.now())
    System.out.println(episode)
}