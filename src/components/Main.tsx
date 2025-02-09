import { useState } from "react"
import { toast } from "react-toastify"
import Spacer, { Loader } from "./Common"
import SummaryComp from "./Summary"

export default function Main() {
  const [videoLink, setVideoLink] = useState("")
  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setVideoLink(event.target.value)
  }

  async function handleSummarize(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)

    try {
      const body = JSON.stringify({ video_url: videoLink })

      // const response = await fetch("http://4.244.144.102:8000/summary", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: body,
      // })

      const response = await fetch(
        "https://18e7-4-244-144-102.ngrok-free.app/summary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        }
      )

      if (!response.ok) {
        toast.error("Something went wrong")
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      setSummary(data.summary)
    } catch (error) {
      console.error("Error fetching summary:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <form className="input-form" onSubmit={handleSummarize}>
        <input
          type="text"
          placeholder="Enter YouTube video link..."
          aria-label="Insert video link"
          name="link"
          required
          value={videoLink}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Summarizing..." : "Summarize"}
        </button>
      </form>
      <Spacer marginTop={2} />
      {loading ? <Loader /> : summary && <SummaryComp text={summary} />}
    </main>
  )
}
