import { render, screen, userEvent } from "@/test-utils";
import PhotoRow from "./photoRow";

const samplePhotos = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: "/event_example.svg",
  alt: `Photo ${i + 1}`,
}));

const onImageClick = jest.fn();

describe("PhotoRow component", () => {
  beforeEach(() => {
    onImageClick.mockClear();
  });

  it("renders all photos", () => {
    render(
      <PhotoRow 
        photoListChunk={samplePhotos} 
        style={false} 
        onImageClick={onImageClick} 
      />
    );
    expect(screen.getByAltText("Photo 1")).toBeInTheDocument();
    expect(screen.getByAltText("Photo 2")).toBeInTheDocument();
    expect(screen.getByAltText("Photo 3")).toBeInTheDocument();
    expect(screen.getByAltText("Photo 4")).toBeInTheDocument();
    expect(screen.getByAltText("Photo 5")).toBeInTheDocument();
    expect(screen.getByAltText("Photo 6")).toBeInTheDocument();
    expect(screen.getByAltText("Photo 7")).toBeInTheDocument();
  });

  it("applies correct background when style is true", () => {
    render(
      <PhotoRow
        photoListChunk={samplePhotos}
        style={true}
        onImageClick={onImageClick}
      />
    );

    const grid = screen.getByTestId("photoGrid");
    expect(grid).toHaveStyle({ backgroundColor: "#717882" });
  });

  it("calls onImageClick with correct index when photo is clicked", async () => {
    render(
      <PhotoRow
        photoListChunk={samplePhotos}
        style={false}
        onImageClick={onImageClick}
      />
    );

    await userEvent.click(screen.getByAltText("Photo 1"));
    expect(onImageClick).toHaveBeenCalledWith(0);

    await userEvent.click(screen.getByAltText("Photo 2"));
    expect(onImageClick).toHaveBeenCalledWith(1);
  });
  
  it("renders empty grid when no photos provided", () => {
    render(
      <PhotoRow
        photoListChunk={[]}
        style={false}
        onImageClick={onImageClick}
      />
    );

    const grid = screen.getByTestId("photoGrid");
    expect(grid).toBeInTheDocument();
    expect(grid).toBeEmptyDOMElement();
  });

});
