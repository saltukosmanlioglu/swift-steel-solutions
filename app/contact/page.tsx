import Breadcrumb from "@/components/layout/breadcrumb";
import Button from "@/components/button";
import TextArea from "@/components/form-elements/text-area";
import TextField from "@/components/form-elements/text-field";

export default function Contact() {
  return (
    <div>
      <Breadcrumb
        description="Get in touch!"
        items={[{ text: "CONTACT" }]}
        position="center"
        theme="smoke"
      />
      <div className="relative">
        <div className="absolute h-[calc(600px)] w-full grayscale z-20" />
        <iframe
          allowFullScreen
          className="border-none grayscale"
          height="600"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.213325301103!2d153.10977677563375!3d-27.61790902303774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914386d22141a5%3A0xe86f213b7c39ee5d!2sBmp%20House%2C%20Unit%204%2F68-72%20Perrin%20Dr%2C%20Underwood%20QLD%204119!5e0!3m2!1sen!2sau!4v1720980657958!5m2!1sen!2sau"
          width="100%"
        />
      </div>
      <section className="py-24 px-64 bg-white">
        <p className="text-5xl font-thin text-center text-black">
          <strong>Let's</strong> Talk
        </p>
        <form className="flex flex-col flex-wrap gap-8 w-full mt-20">
          <div className="flex flex-wrap justify-between gap-4 [&>div]:w-[calc(50%-12px)] mobile:flex-col mobile:[&>div]:w-full mobile:gap-4">
            <TextField
              name="phoneNumber"
              placeholder="WHAT'S YOUR NAME"
              type="tel"
            />
            <TextField name="email" placeholder="E-POSTA" type="email" />
          </div>
          <TextArea name="message" placeholder="MESSAGE..." />
          <div className="ml-auto">
            <Button buttonprops={{ type: "submit" }} text="SUBMIT" />
          </div>
        </form>
      </section>
    </div>
  );
}
