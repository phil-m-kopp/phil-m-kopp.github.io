from pathlib import Path
from PIL import Image

def convert_to_webp(source):
    """Convert image to webp.

    Args:
        source (pathlib.Path): Path to source image

    Returns:
        pathlib.Path: path to new image
    """
    destination = source.with_suffix(".webp")

    image = Image.open(source)  # Open image
    # image.thumbnail((512,512), Image.Resampling.LANCZOS)
    image.save(destination, format="webp", method=6)  # Convert image to webp
    # Path.unlink(source)

    return destination

def main():
    types = ("**/*.jpg", "**/*.jpeg", "**/*.png") # the tuple of file types
    files_grabbed = []
    for files in types:
        files_grabbed.extend(Path("docs/articles").glob(files))

    for path in files_grabbed:
        webp_path = convert_to_webp(path)
        print(webp_path)
    print("---done converting to webp---")

main()