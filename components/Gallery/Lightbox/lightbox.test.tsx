import { render, screen, userEvent } from "@/test-utils";
import Lightbox from "./lightbox";

const samplePhotos = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  src: "/event_example.svg",
  alt: `Photo ${i + 1}`,
}));

describe("Lightbox component", () => {
  it("doesn't render when open is false", () => {
    render(
      <Lightbox
        open={false}
        photoList={samplePhotos}
        photoIndex={0}
        close={() => {}}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    );
    expect(screen.queryByAltText("Photo 1")).not.toBeInTheDocument();
  });

  it("renders the current photo when open", () => {
    render(
      <Lightbox
        open={true}
        photoList={samplePhotos}
        photoIndex={1}
        close={() => {}}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    );
    expect(screen.getByAltText("Photo 2")).toBeInTheDocument();
  });

  it("focuses the overlay when opened", () => {
    render(
      <Lightbox
        open={true}
        photoList={samplePhotos}
        photoIndex={0}
        close={() => {}}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    );
    const overlay = screen.getByTestId("overlay");
    expect(document.activeElement).toBe(overlay);
  });

  it("closes when Esc is pressed", async () => {
    const close = jest.fn();
    render(
      <Lightbox
        open={true}
        photoList={samplePhotos}
        photoIndex={0}
        close={close}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    );
    await userEvent.keyboard("{Escape}");
    expect(close).toHaveBeenCalled();
  });

  it("closes when close button is clicked", async () => {
    const close = jest.fn();
    render(
      <Lightbox
        open={true}
        photoList={samplePhotos}
        photoIndex={0}
        close={close}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "close" }));
    expect(close).toHaveBeenCalled();
  });

  it("calls onPrev and onNext when navigation buttons are clicked", async () => {
    const onPrev = jest.fn();
    const onNext = jest.fn();
    render(
      <Lightbox
        open={true}
        photoList={samplePhotos}
        photoIndex={1}
        close={() => {}}
        onPrev={onPrev}
        onNext={onNext}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "prev" }));
    await userEvent.click(screen.getByRole("button", { name: "next" }));
    expect(onPrev).toHaveBeenCalled();
    expect(onNext).toHaveBeenCalled();
  });
});
