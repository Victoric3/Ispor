class Prompt {
    constructor(target) {
        this.playground = document.querySelector(target)
        this.promptWindow = this.playground.querySelector(".prompt-container")
        this.promptList = []
        this.answers = {
            // About AcadX
            "what is acadx": "AcadX is your trusted partner in mastering challenging courses through expertly crafted video tutorials and resources designed to simplify learning and maximize results.",
            "about acadx": "AcadX is an educational platform offering expertly crafted video tutorials and resources, starting with PCH 331: Pharmaceutical Organic Chemistry.",
            "what is acad x": "AcadX is your trusted partner in mastering challenging courses through expertly crafted video tutorials and resources designed to simplify learning and maximize results.",
            "about acad x": "AcadX is an educational platform offering expertly crafted video tutorials and resources, starting with PCH 331: Pharmaceutical Organic Chemistry.",
            
            // Courses
            "what courses": "Currently, we offer PCH 331: Pharmaceutical Organic Chemistry, covering topics like synthetic organic compounds, heterocyclic compounds, and stereochemistry.",
            "courses": "Our first course is PCH 331: Pharmaceutical Organic Chemistry, designed for 300 level Pharmacy students.",
            "what courses do you offer": "Currently, we offer PCH 331: Pharmaceutical Organic Chemistry, covering topics like synthetic organic compounds, heterocyclic compounds, and stereochemistry.",
            "what courses are available": "Our first course is PCH 331: Pharmaceutical Organic Chemistry, designed for 300 level Pharmacy students.",
            
            // Why Choose
            "why choose": "AcadX offers:\n- Tailored video tutorials\n- Expert tutors\n- Convenience & flexibility\n- Affordable subscription\n- High-quality content",
            "why choose acadx": "AcadX offers:\n- Tailored video tutorials\n- Expert tutors\n- Convenience & flexibility\n- Affordable subscription\n- High-quality content",
            "why choose acad x": "AcadX offers:\n- Tailored video tutorials\n- Expert tutors\n- Convenience & flexibility\n- Affordable subscription\n- High-quality content",
            
            // Contact
            "contact": "You can reach us at:\nEmail: academyxoffice@gmail.com\nPhone: 08082010262\nYouTube: @academyx-m4m\nTikTok: academyx.co",
            "how to contact": "You can reach us at:\nEmail: academyxoffice@gmail.com\nPhone: 08082010262\nYouTube: @academyx-m4m\nTikTok: academyx.co",
            "contact information": "You can reach us at:\nEmail: academyxoffice@gmail.com\nPhone: 08082010262\nYouTube: @academyx-m4m\nTikTok: academyx.co",
            
            // Welcome
            "welcome": "Welcome to Academy-X.co! Bridging the gap between knowledge and understanding.",
            "welcome to acadx": "Welcome to Academy-X.co! Bridging the gap between knowledge and understanding.",
            "welcome to acad x": "Welcome to Academy-X.co! Bridging the gap between knowledge and understanding.",
            
            // How It Works
            "how it works": "1. Sign Up: Create your account in minutes.\n2. Subscribe: Unlock access to premium content with our affordable plans.\n3. Learn: Watch, practice, and excel in your studies.",
            "how does it work": "1. Sign Up: Create your account in minutes.\n2. Subscribe: Unlock access to premium content with our affordable plans.\n3. Learn: Watch, practice, and excel in your studies.",
            "how do i start": "1. Sign Up: Create your account in minutes.\n2. Subscribe: Unlock access to premium content with our affordable plans.\n3. Learn: Watch, practice, and excel in your studies.",
            
            //
        }
        this.addPrompt = this.addPrompt.bind(this)
        this.answer = this.answer.bind(this)
    }

    findBestMatch(question) {
        question = question.toLowerCase().trim()
        for (let key in this.answers) {
            if (question.includes(key)) {
                return this.answers[key]
            }
        }
        return "Please contact our info team at academyxoffice@gmail.com or call 08082010262 for more information."
    }

    addPrompt(msg) {
        if (this.promptList.length === 0)
            this.promptWindow.innerHTML = ""

        this.promptList.push(msg)

        const text = document.createElement("div")
        text.classList.add("tw-w-fit", "tw-ml-auto", "tw-p-2", "tw-rounded-xl", 
                            "tw-bg-gray-100", "dark:tw-bg-[#171717]")
        text.innerText = msg

        const promptElement = `
            <div class="tw-w-full tw-flex tw-p-2">
                ${text.outerHTML.toString()}
            </div>
        `

        this.promptWindow.innerHTML += promptElement

        setTimeout(() => {
            this.promptWindow.scrollTop = this.promptWindow.scrollHeight
        }, 150)

        setTimeout(this.answer, 100)
    }

    answer() {
        const lastPrompt = this.promptList[this.promptList.length - 1]
        const response = this.findBestMatch(lastPrompt)

        const text = document.createElement("div")
        text.classList.add("tw-w-fit", "tw-mr-auto", "tw-p-2")
        text.innerText = response

        const promptElement = `
            <div class="tw-w-full tw-flex tw-p-2">
                ${text.outerHTML.toString()}
            </div>
        `
        this.promptWindow.innerHTML += promptElement
    }
}

// Remove or comment out old Dropdown class if not needed